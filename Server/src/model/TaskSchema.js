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
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Tasks', TaskSchema)