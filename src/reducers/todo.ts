import { handleActions } from "redux-actions";
import {
  TOGGLE_TODO_ACTION,
  CREATE_TODO_ACTION,
  MODIFY_TODO_ACTION,
  REMOVE_TODO_ACTION,
  TODO_PAYLOADS,
  TOGGLE_TODO_PAYLOAD,
  CREATE_TODO_PAYLOAD,
  MODIFY_TODO_PAYLOAD,
  REMOVE_TODO_PAYLOAD
} from "../actions/todo";

export interface TODO {
  id: string | number;
  isDone: boolean;
  title: string;
  createDateTime: string;
}

export interface TODO_STATE {
  list: TODO[];
}

export const initialTodoState: TODO_STATE = {
  list: []
};

export const todoReducer = handleActions<TODO_STATE, TODO_PAYLOADS>(
  {
    [TOGGLE_TODO_ACTION]: (state, { payload }) => {
      const { list } = state;
      const { id } = payload as TOGGLE_TODO_PAYLOAD;

      return {
        ...state,
        list: list.map((e) =>
          e.id !== id
            ? e
            : {
                ...e,
                isDone: !e.isDone
              }
        )
      };
    },
    [CREATE_TODO_ACTION]: (state, { payload }) => {
      const { list } = state;
      const { title } = payload as CREATE_TODO_PAYLOAD;
      const createDateTime = new Date();

      return {
        ...state,
        list: [
          ...list,
          {
            id: list.length,
            isDone: false,
            title,
            createDateTime: createDateTime.toString()
          }
        ]
      };
    },
    [MODIFY_TODO_ACTION]: (state, { payload }) => {
      const { list } = state;
      const { id, title } = payload as MODIFY_TODO_PAYLOAD;

      return {
        ...state,
        list: list.map((e) =>
          e.id !== id
            ? e
            : {
                ...e,
                title
              }
        )
      };
    },
    [REMOVE_TODO_ACTION]: (state, { payload }) => {
      const { list } = state;
      const { id } = payload as REMOVE_TODO_PAYLOAD;

      return {
        ...state,
        list: list.filter((e) => e.id !== id)
      };
    }
  },
  initialTodoState
);
