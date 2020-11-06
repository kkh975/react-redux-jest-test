import * as React from "react";
import { AnyAction, createStore, Store } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import CreateInput from "./CreateInput";
import rootReducer from "./reducers/index";
import { initialTodoState } from "./reducers/todo";

describe("CreateInput Component", () => {
  let store: Store<any, AnyAction>;
  let result: RenderResult;
  let input: HTMLElement;
  let button: HTMLElement;

  beforeEach(() => {
    store = createStore(rootReducer, { todo: initialTodoState });
    result = render(
      <Provider store={store}>
        <CreateInput />
      </Provider>
    );
    input = result.getByRole("textbox");
    button = result.getByRole("button");
  });

  describe("enter", () => {
    it("has value and in input", () => {
      fireEvent.change(input, { target: { value: "aaa" } });
      fireEvent.keyDown(input, { keyCode: 13 });

      expect((input as HTMLInputElement).value).toBe("");
    });
    it("has value", () => {
      fireEvent.change(input, { target: { value: "aaa" } });
      fireEvent.keyDown(input, { keyCode: 13 });

      const { todo } = store.getState();
      const { list } = todo;
      expect(list.length).toBe(1);
    });
    it("has not value", () => {
      fireEvent.keyDown(input, { keyCode: 13 });

      const { todo } = store.getState();
      const { list } = todo;
      expect(list.length).toBe(0);
    });
  });

  describe("click", () => {
    it("has value", () => {
      fireEvent.change(input, { target: { value: "aaa" } });
      fireEvent.click(button);

      const { todo } = store.getState();
      const { list } = todo;
      expect(list.length).toBe(1);
    });

    it("has not value", () => {
      fireEvent.click(button);

      const { todo } = store.getState();
      const { list } = todo;
      expect(list.length).toBe(0);
    });
  });
});
