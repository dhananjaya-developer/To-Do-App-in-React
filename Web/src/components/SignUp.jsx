import React from "react";

const SignUp = () => {
  return (
    <div
      className="login-wrapper"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Please Log In</h1>
      <div className="container row">
        <div className="jumbotron col-sm-4 pull-center">
          <form action="/signup" method="post">
            <div className="form-group">
              <label>Username:</label>
              <input
                className="form-control"
                required
                type="text"
                name="username"
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                className="form-control"
                required
                type="email"
                name="email"
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                className="form-control"
                required
                type="password"
                name="password"
              />
            </div>
            <div className="form-group">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
