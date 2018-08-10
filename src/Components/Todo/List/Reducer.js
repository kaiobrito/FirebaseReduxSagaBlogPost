// @flow
import type { TodoReducerState } from "@Common/Types";
import { ActionTypes } from "./Actions";
import type { TodoAction } from "./Actions";

const INITIAL_STATE: TodoReducerState = {
  items: []
};

export default (
  state: TodoReducerState = INITIAL_STATE,
  action: TodoAction
): TodoReducerState => {
  switch (action.type) {
    // #5: Whenever the REFRESH_LIST action is dispatched, the reducer will update the list of items to the list passed as payload
    case ActionTypes.REFRESH_LIST:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
