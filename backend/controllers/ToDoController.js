const ToDoModel = require("../models/ToDoModel");

module.exports.getAllToDos = async (req, res) => {
  const todos = await ToDoModel.find();
  res.send(todos);
};

module.exports.createToDo = async (req, res) => {
  const { text } = req.body;
  await ToDoModel.create({ text, status: false })
    .then((data) => {
      res.send(data);
      console.log("Data saved successfully...");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports.updateToDo = async (req, res) => {
    const {_id, text} = req.body
    await ToDoModel.findByIdAndUpdate(_id, {text})
    .then((data) => {
        res.send(data)
        console.log("Data updated successfully...")
    })
    .catch((err) => {
        console.log(err)
    })
};

module.exports.deleteToDo = async (req, res) => {
    const {_id} = req.body
    await ToDoModel.findByIdAndDelete(_id)
    .then((data) => {
        res.send(data)
        console.log("Successfully deleted...")
    })
    .catch((err) => {
        console.log(err)
    })
}

module.exports.updateStatus = async (req, res) => {
  const {_id, status} = req.body
  await ToDoModel.findByIdAndUpdate(_id, {status})
  .then((data) => {
    res.send(data)
    console.log("Status updated successfully...")
  })
  .catch((err) => {
    console.log(err)
  })
}
