import Header from "./components/Header";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import About from "./components/About";
import Login from "./components/Login";
import Task from "./components/Task";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [buttonText, setButtontext] = useState("");
  const [text, setText] = useState("Sign up");
  const onClick = () => {
    if (window.location.pathname === "/") {
      window.location = "/signup";
      setText("Log In");
    } else if (window.location.pathname === "/signup") {
      window.location = "/";
      setText("Sign Up");
    } else if (window.location.pathname === "/task") {
      window.location = "/";
      setText("Log out");
    }
  };

  useEffect(() => {
  }, []);

  const [token, setToken] = useState();

  return (
    <div className="maincontainer">
      <Router>
        <Header title="Task tracker" text={text} onClick={onClick}></Header>
        <Switch>
          <Route path="/" exact>
            <Login setToken={setToken} />
          </Route>
          <Route path="/task" exact>
            <Task />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
        </Switch>

        <Route path="/about" component={About} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
