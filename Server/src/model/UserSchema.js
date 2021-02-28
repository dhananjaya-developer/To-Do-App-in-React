const mongoose = require('mongoose')
const Cryptr = require('cryptr');
const cryptr = new Cryptr('P@ssw0rd');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique:true,
    dropDups:true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  }
});

UserSchema.pre("save", function(next) {
  if(!this.isModified("password")) {
      return next();
  }
  this.password = cryptr.encrypt(this.password);
  next();
});


module.exports = mongoose.model('User', UserSchema)