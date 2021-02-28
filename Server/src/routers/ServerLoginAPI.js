const express = require("express");
const router = express.Router();
const User = require("../model/UserSchema");
const Cryptr = require("cryptr");
const cryptr = new Cryptr("P@ssw0rd");
const UserSession = require("../model/UserSessionSchema");
var randomstring = require("randomstring");

router.get("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    var users = await User.findOne({ username: username }).exec();
    if (!users) {
      res.status(404).json("User not registered");
      return;
    } else if (cryptr.decrypt(users.password) === password) {
      var session = await UserSession.findOne({ username: username }).exec();
      if (!session) {
        let userSession = await createSession(username);
        res.status(200).json(userSession);
      } else {
        res.status(200).json(session);
      }
      return;
    } else {
      res.status(401).json("Password not matching");
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

router.post("/signup", async (req, res) => {
  const { username, password, email } = req.body;
  let user = {};
  user.username = username;
  user.password = password;
  user.email = email;
  const userModel = new User(user);
  try {
    await userModel.save();
    let usersession = await createSession(username);
    res.status(200).json(usersession);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/session", async (req, res) => {
  const { username, token } = req.body;
  try {
    var session = await UserSession.findOne({
      username: username,
      token: token,
    }).exec();
    if (!session) {
      res.status(400).json("Not found");
    } else {
      res.status(200).json(session);
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
});

var createSession = async (username) => {
  var userSession = {};
  userSession.username = username;
  userSession.token = randomstring.generate(16);
  const userSessionModel = new UserSession(userSession);
  await userSessionModel.save();
  return userSession;
};

const verifyTocken = () => {};
module.exports = router;
