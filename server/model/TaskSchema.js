const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  reminder: {
    type: Boolean,
    required: true
  },
  taskDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('Tasks', TaskSchema)