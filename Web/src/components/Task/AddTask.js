import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a task");
    }
    onAdd({ name: text, taskDate: day, reminder: reminder });
    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <div className="container row">
      <div className="jumbotron col-sm-4 pull-center">
        <form className="add-form" onSubmit={onSubmit}>
          <div className="form-group">
            <label>Task</label>
            <input
              className="form-control"
              type="text"
              placeholder="Add Task"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Day</label>
            <input
              className="form-control"
              type="text"
              placeholder="Add Day"
              value={day}
              onChange={(e) => setDay(e.target.value)}
            />
          </div>
          <div className="form-group form-control-check">
            <label>Reminder</label>
            <input
              className="form-control"
              type="checkbox"
              checked={reminder}
              value={reminder}
              onChange={(e) => setReminder(e.currentTarget.checked)}
            />
          </div>
          <input
            type="submit"
            value="save task"
            className="btn btn-block"
          ></input>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
