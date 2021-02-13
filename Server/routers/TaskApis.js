const express = require("express");
const router = express.Router();
const Task = require("../model/TaskSchema");

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id',getSubscriber, (req,res)=>{
    res.send(res.task);
});

router.post('/',async (req,res)=>{
    const { name, reminder,taskDate } = req.body;
    let task = {};
    task.name = name;
    task.reminder = reminder;
    task.taskDate=taskDate;
    console.log(task)
    const taskModel = new Task(task);
    // await taskModel.save();
    try {
      await taskModel.save();
      res.status(200).json(taskModel);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
});

router.put('/:id',getSubscriber,async(req,res)=>{
    if (req.body.name != null) {
        res.task.name = req.body.name;
      }
      if (req.body.reminder != null) {
        res.task.reminder = req.body.reminder;
      }
      if(req.body.taskDate !==null){
          res.task.taskDate=req.body.taskDate;
      }
      try {
        const updateduser = await res.task.save();
        res.json(updateduser);
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
})

// // Deleting One
router.delete("/:id", getSubscriber, async (req, res) => {
  try {
    await res.task.deleteOne();
    res.json({ message: "Deleted Subscriber" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getSubscriber(req, res, next) {
  let task;
  try {
    task = await Task.findById(req.params.id);
    if (task === null)
      return res.status(404).json({ message: "Cannot find task" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }

  res.task = task;
  next();
}

module.exports = router;
