import { combineReducers } from "redux";
import { todoReducer, TODO_STATE } from "./todo";

export interface ROOT_STATE {
  todo: TODO_STATE;
}

const rootReducer = combineReducers<ROOT_STATE>({ todo: todoReducer });

export default rootReducer;
