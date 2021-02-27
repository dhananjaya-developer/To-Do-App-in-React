import Header from "./components/Header";
import { useState,useEffect } from "react";
import Footer from "./components/Footer";
import About from "./components/About";
import Login from "./components/Login";
import Task from "./components/Task";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [buttonText,setButtontext] =useState('');

  useEffect(() => {
    if(window.location.pathname==='/')
    setButtontext('Signup')
    else if(window.location.pathname==='/task')
    setButtontext('Add')
  }, [])

  const [token, setToken] = useState();

  return (
    <div className="maincontainer">
      <Router>
        <Header
          title="Task tracker"
          onClick={() => setShowAddTask(!showAddTask)}
          showAddTask={showAddTask}
          text={buttonText}
        ></Header>
        <Switch>
          <Route path="/" exact>
            <Login setToken={setToken} />
          </Route>
          <Route path="/task" exact>
            <Task showAddTask={showAddTask} />
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
