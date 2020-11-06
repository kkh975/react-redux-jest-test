import { createAction } from "redux-actions";

export const TOGGLE_TODO_ACTION = "TOGGLE_TODO";
export const CREATE_TODO_ACTION = "CREATE_TODO";
export const MODIFY_TODO_ACTION = "MODIFY_TODO";
export const REMOVE_TODO_ACTION = "REMOVE_TODO";

export interface TOGGLE_TODO_PAYLOAD {
  id: string | number;
}

export interface CREATE_TODO_PAYLOAD {
  title: string;
}

export interface MODIFY_TODO_PAYLOAD {
  id: string | number;
  title: string;
}

export interface REMOVE_TODO_PAYLOAD {
  id: string | number;
}

export type TODO_PAYLOADS =
  | TOGGLE_TODO_PAYLOAD
  | CREATE_TODO_PAYLOAD
  | MODIFY_TODO_PAYLOAD
  | REMOVE_TODO_PAYLOAD;

export const toggleTodo = createAction<TOGGLE_TODO_PAYLOAD>(TOGGLE_TODO_ACTION);
export const createTodo = createAction<CREATE_TODO_PAYLOAD>(CREATE_TODO_ACTION);
export const modifyTodo = createAction<MODIFY_TODO_PAYLOAD>(MODIFY_TODO_ACTION);
export const removeTodo = createAction<REMOVE_TODO_PAYLOAD>(REMOVE_TODO_ACTION);
