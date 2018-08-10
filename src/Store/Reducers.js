import { combineReducers } from "redux";

import TodoReducer from "../Components/Todo/List/Reducer";

export default combineReducers({
  todos: TodoReducer
});
