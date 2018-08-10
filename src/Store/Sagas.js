import { fork } from "redux-saga/effects";
import TodoListSagas from "../Components/Todo/List/Sagas";

export default function*() {
  yield fork(TodoListSagas);
}
