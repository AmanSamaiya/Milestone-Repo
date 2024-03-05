import Todo from "../Todo/Todo.jsx";
import "../TodoList/TodoList.css";
import { useDispatch, useSelector } from "react-redux";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  function deleteTodo(id) {
    dispatch({ type: "delete_todo", payload: { id } });
  }

  return (
    <>
    <h1 className="heading">To-Do List</h1>
    <div className="todoContainer">
      {todos &&
        todos.map((todo) => (
          <Todo
            deletetodos={() => deleteTodo(todo.id)}
            key={todo.id}
            text={todo.text}
            id={todo.id}
          />
        ))}
    </div>
    </>
  );
}

export default TodoList;
