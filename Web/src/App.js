import Header from "./components/Header";
import { useState } from "react";
import Footer from "./components/Footer";
import About from "./components/About";
import Login from "./components/Login";
import Task from "./components/Task";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [token, setToken] = useState();

  return (
    <div className="container">
      <Router>
        <Header
          title="Task tracker"
          onClick={() => setShowAddTask(!showAddTask)}
          showAddTask={showAddTask}
          path={window.location.pathname}
        ></Header>
        <Switch>
          <Route path="/" exact>
            <Login setToken={setToken} />
          </Route>
          <Route path="/task" exact>
            <Task showAddTask={showAddTask}/>
          </Route>
        </Switch>

        <Route path="/about" component={About} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
