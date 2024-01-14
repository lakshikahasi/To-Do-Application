import axios from "axios";

const BaseURL = "http://localhost:5000";

const getAllToDo = (setToDo) => {
  axios
    .get(BaseURL)
    .then(({ data }) => {
      setToDo(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const createToDo = (text, setToDo, setText) => {
  axios
    .post(`${BaseURL}/save`, { text })
    .then(() => {
      getAllToDo(setToDo);
      setText("");
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateToDoItem = (
  id,
  text,
  setTodo,
  setText,
  setIsUpdating,
  setLoadingId
) => {
  axios
    .put(`${BaseURL}/update`, { _id: id, text })
    .then(() => {
      getAllToDo(setTodo);
      setText("");
      setIsUpdating(false);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setLoadingId(null);
    });
};

const deleteToDoItem = (id, setTodo,setLoadingId) => {
  setLoadingId(id)
  axios
    .post(`${BaseURL}/delete`, { _id: id })
    .then((data) => {
      getAllToDo(setTodo);
    })
    .catch((err) => {
      console.log(err);
    }).finally(()=>{
      setLoadingId(null)
    })
};

const changeStatus = (id, status, setToDo, setLoadingId) => {
  setLoadingId(id)
  axios
    .put(`${BaseURL}/changeStatus`, { _id: id, status })
    .then((data) => {
      getAllToDo(setToDo);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(()=>{
      setLoadingId(null)
    })
};

export { getAllToDo, createToDo, updateToDoItem, deleteToDoItem, changeStatus };
