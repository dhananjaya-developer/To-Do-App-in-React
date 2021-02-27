import React from "react";
import AddTask from "./Task/AddTask";
import Tasks from "./Task/Tasks";
import { useState, useEffect } from "react";

const Task = ({ showAddTask }) => {
  const [tasks, setTasks] = useState([]);

  //Fetch task
  const fetchtasks = async () => {
    const res = await fetch(
      "https://brave-murdock-46d903.netlify.app/.netlify/functions/server"
    );
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchtasks();
      setTasks(taskFromServer);
    };
    getTasks();
  }, []);

  //Fetch single  task
  const fetchtask = async (id) => {
    const res = await fetch(
      `https://brave-murdock-46d903.netlify.app/.netlify/functions/server/${id}`
    );
    const data = await res.json();
    return data;
  };

  //Toggele reminder
  const toggleReminder = async (id) => {
    const taskToToggele = await fetchtask(id);
    const upTask = { ...taskToToggele, reminder: !taskToToggele.reminder };

    const res = await fetch(
      `https://brave-murdock-46d903.netlify.app/.netlify/functions/server/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(upTask),
      }
    );

    const data = await res.json();

    setTasks(
      tasks.map((task) =>
        task._id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  //Add task
  const addtask = async (task) => {
    // const id=Math.random();
    // const newtask={id,...tasks};
    // setTasks([...tasks,newtask]);

    const res = await fetch(
      `https://brave-murdock-46d903.netlify.app/.netlify/functions/server`,
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      }
    );

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  //Delete task
  const deleteTask = async (id) => {
    await fetch(
      `https://brave-murdock-46d903.netlify.app/.netlify/functions/server/${id}`,
      {
        method: "Delete",
      }
    );
    setTasks(tasks.filter((task) => task._id !== id));
    //getTasks();
  };

  return (
    <div
    className="login-wrapper"
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <div className="container row">
        {showAddTask && <AddTask onAdd={addtask} />}
        {tasks.length > 0 ? (
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
        ) : (
          "No task"
        )}
    </div>
    </div>
  );
};

export default Task;
