// @flow
import type { TodoType, TodoReducerState } from "@Common/Types";

// #1: Actions to be dispatched in the store
type Action = {
  +type: string,
  +payload: Array<TodoType>
};

// #2: You don't need to create this const variable, you can pass the string directly.
// I like to use this const variable to prevent typos, maybe another dev will try to dispatch `LIST_REFRESHED` instead of `LIST/REFRESHED`
export const ActionTypes: { [string]: string } = {
  REFRESH_LIST: "LIST/REFRESHED"
};

export const ActionCreators: { [string]: (any) => Action } = {
  // #3: Make sure the REFRESH_LIST action will send an Array of Todo in the payload
  updateList: (items: Array<TodoType>): Action => ({
    type: ActionTypes.REFRESH_LIST,
    payload: items
  })
};

const INITIAL_STATE: TodoReducerState = {
  items: []
};

export default (
  state: TodoReducerState = INITIAL_STATE,
  action: Action
): TodoReducerState => {
  switch (action.type) {
    // #5: Whenever the REFRESH_LIST action is dispatched, the reducer will update the list of items to the list passed as payload
    case ActionTypes.REFRESH_LIST:
      return { ...state, items: action.payload };
    default:
      return state;
  }
};
