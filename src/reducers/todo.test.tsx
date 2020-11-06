import { TODO_STATE, initialTodoState, todoReducer } from "./todo";
import {
  toggleTodo,
  createTodo,
  modifyTodo,
  removeTodo
} from "../actions/todo";

describe("todo reducer", () => {
  let state: TODO_STATE;

  beforeEach(() => {
    state = todoReducer(initialTodoState, createTodo({ title: "aaa" }));
  });

  it("create action", () => {
    expect(state.list.length).toEqual(1);
  });

  it("toggle action", () => {
    state = todoReducer(state, toggleTodo({ id: 0 }));
    expect(state.list[0].isDone).toBe(true);
  });

  it("modify action", () => {
    state = todoReducer(state, modifyTodo({ id: 0, title: "bbb" }));
    expect(state.list.length).toEqual(1);
    expect(state.list[0].title).toEqual("bbb");
  });

  it("remove action", () => {
    state = todoReducer(state, removeTodo({ id: 0 }));
    expect(state.list.length).toEqual(0);
  });
});
