import React from "react";
import { useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const signup = async () => {
    var user={}
    user.username=username;
    user.password=password;
    user.email=email;
    const res = await fetch(
      `https://tasktrackerserver.netlify.app/.netlify/functions/server/signup`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data=await res.json();
    if(data.token){
      window.location='/task'
    }
  };

  return (
    <div
      className="login-wrapper"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Please Log In</h1>
      <div className="container row">
        <div className="jumbotron col-sm-4 pull-center">
            <div className="form-group">
              <label>Username:</label>
              <input
                className="form-control"
                required
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                className="form-control"
                required
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                className="form-control"
                required
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
                onClick={signup}
              />
            </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
