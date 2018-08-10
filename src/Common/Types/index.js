// @flow

export type TodoType = {
  id: string,
  text: string
};

// reducer.todos
export type TodoReducerState = {
  +items: Array<TodoType>
};

export type AppState = {
  todos: TodoReducerState
};
