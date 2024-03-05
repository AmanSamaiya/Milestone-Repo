import { useState } from "react";
import "../AddTodo/AddTodo.css";
import { useDispatch } from "react-redux";

function AddTodo() {
  const dispatch = useDispatch();

  const [todotext, setTodoText] = useState("");

  function addTodo(todotext) {
    if (todotext.length > 0)
      dispatch({ type: "add_todo", payload: { todotext } });
  }

  return (
    <div className="addContainer">
      <input
        className="addinput"
        type="text"
        placeholder="Add your To-Do's ..."
        onChange={(e) => setTodoText(e.target.value)}
        value={todotext}
      />
      <button
        className="addbtn"
        onClick={() => {
          addTodo(todotext);
          setTodoText("");
        }}
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
