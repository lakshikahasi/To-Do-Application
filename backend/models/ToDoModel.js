const mongoose = require("mongoose");

const ToDoSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("ToDo", ToDoSchema);
