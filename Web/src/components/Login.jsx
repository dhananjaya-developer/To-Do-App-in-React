import { useState } from "react";
import { sessionGet, sessionSet } from "../sessionStorage";

const checkSession = async () => {
  let sessio_id = sessionGet("user_token");
  if(!sessio_id)
    return false;
  const res = await fetch(
    `https://tasktrackerserver.netlify.app/.netlify/functions/server/session`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ token: sessio_id }),
    }
  );
  const data = await res.json();
  if (data.username) return true;
  else return false;
};

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let data=checkSession();
  if(data.username){
    window.location='/task';
    return;
  }

  const login = async () => {
    var user = {};
    user.username = username;
    user.password = password;
    const res = await fetch(
      `https://tasktrackerserver.netlify.app/.netlify/functions/server/login`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    );
    const data = await res.json();
    if (data.token) {
      sessionSet("user_token", data.token);
      window.location = "/task";
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
            {/* <Link to="/task"> */}
            <input
              className="btn btn-primary"
              type="submit"
              value="Log In"
              onClick={login}
            />
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
