import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import Reducer from "./Reducers";
import AppSagas from "./Sagas";

const saga = createSagaMiddleware();
const Store = createStore(Reducer, applyMiddleware(saga));
saga.run(AppSagas);

export default Store;
