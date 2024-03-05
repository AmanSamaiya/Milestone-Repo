import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { Provider } from "react-redux";
import store from "./store";

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <AddTodo/>
        <TodoList/>
      </Provider>
    </div>
  );
}

export default App;
