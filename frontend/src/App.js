import { useEffect, useState } from "react";
import { ToDoItem } from "./components/ToDoItem";
import {
  getAllToDo,
  createToDo,
  updateToDoItem,
  deleteToDoItem,
  changeStatus,
} from "./utils/ToDoApis";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  const [loadingId, setLoadingId] = useState(null);

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const onUpdateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };
  
  return (
    <div className="container">
      <h1 className="heading">To Do List</h1>
      <div className="top">
        <input
          placeholder="Add your tasks here..."
          className="input"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div
          className="button"
          onClick={
            isUpdating
              ? () => {
                  setLoadingId(toDoId);
                  updateToDoItem(
                    toDoId,
                    text,
                    setToDo,
                    setText,
                    setIsUpdating,
                    setLoadingId
                  );
                }
              : () => createToDo(text, setToDo, setText)
          }
        >
          {isUpdating ? "Update" : "Add"}
        </div>
      </div>
      <div className="list">
        {toDo.map((item) => (
          <ToDoItem
            key={item._id}
            text={item.text}
            id={item._id}
            updateItem={() => {
              onUpdateMode(item._id, item.text);
            }}
            deleteItem={() => {
              deleteToDoItem(item._id, setToDo, setLoadingId);
            }}
            changeStatus={() => {
              changeStatus(item._id, !item.status, setToDo, setLoadingId);
            }}
            status={item.status}
            loadingId={loadingId}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
