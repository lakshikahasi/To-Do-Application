const express = require("express");
const { getAllToDos, createToDo, updateToDo, deleteToDo, updateStatus } = require("../controllers/ToDoController");
const router = express.Router();

router.get("/", getAllToDos);
router.post("/save", createToDo);
router.put("/update", updateToDo);
router.post('/delete', deleteToDo);
router.put("/changeStatus", updateStatus)

module.exports = router;
