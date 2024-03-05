import { combineReducers, createStore } from "redux";
import TodoReducer from "./Reducers/TodoReducer";

const reducers = combineReducers({todos : TodoReducer});

const store = createStore(reducers);


export default store;