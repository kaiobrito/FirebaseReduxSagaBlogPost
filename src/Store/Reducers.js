import { combineReducers } from "redux";

import TodoReducer from "../Components/Todos/List/Reducer";

export default combineReducers({
  todos: TodoReducer
});
