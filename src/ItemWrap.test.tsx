import * as React from "react";
import { AnyAction, createStore, Store } from "redux";
import { Provider } from "react-redux";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import ItemWrap from "./ItemWrap";
import rootReducer from "./reducers/index";

describe("InputWrap Component", () => {
  let store: Store<any, AnyAction>;
  let result: RenderResult;

  beforeEach(() => {
    const item = {
      id: 1,
      isDone: false,
      title: "aaa",
      createDateTime: new Date().toString()
    };
    store = createStore(rootReducer, {
      todo: {
        list: [item]
      }
    });
    result = render(
      <Provider store={store}>
        <ItemWrap {...item} />
      </Provider>
    );
  });

  it("toggle", () => {
    const checkbox = result.getByRole("checkbox");
    let state = store.getState();
    let list = state.todo.list;

    expect(list[0].isDone).toBe(false);

    fireEvent.click(checkbox);

    state = store.getState();
    list = state.todo.list;

    expect(list[0].isDone).toBe(true);
  });

  describe("change", () => {
    let input: HTMLElement;

    describe("input", () => {
      beforeEach(() => {
        input = result.getByRole("textbox");
      });

      it("has value", () => {
        let state = store.getState();
        let list = state.todo.list;

        expect(list[0].title).toBe("aaa");

        fireEvent.change(input, { target: { value: "bbb" } });
        fireEvent.keyDown(input, { keyCode: 13 });

        state = store.getState();
        list = state.todo.list;

        expect(list[0].title).toBe("bbb");
      });

      it("has not value", () => {
        let state = store.getState();
        let list = state.todo.list;

        expect(list[0].title).toBe("aaa");

        fireEvent.change(input, { target: { value: "" } });
        fireEvent.keyDown(input, { keyCode: 13 });

        state = store.getState();
        list = state.todo.list;

        expect(list[0].title).toBe("aaa");
      });
    });

    describe("click", () => {
      let button: HTMLElement;

      beforeEach(() => {
        input = result.getByRole("textbox");
        button = result
          .getAllByRole("button")
          .find((e) => e.textContent === "수정");
      });

      it("has value", () => {
        let state = store.getState();
        let list = state.todo.list;

        expect(list[0].title).toBe("aaa");

        fireEvent.change(input, { target: { value: "bbb" } });
        fireEvent.click(button);

        state = store.getState();
        list = state.todo.list;

        expect(list[0].title).toBe("bbb");
      });

      it("has not value", () => {
        let state = store.getState();
        let list = state.todo.list;

        expect(list[0].title).toBe("aaa");

        fireEvent.change(input, { target: { value: "" } });
        fireEvent.click(button);

        state = store.getState();
        list = state.todo.list;

        expect(list[0].title).toBe("aaa");
      });
    });
  });

  it("remove", () => {
    const button = result
      .getAllByRole("button")
      .find((e) => e.textContent === "삭제");
    let state = store.getState();
    let list = state.todo.list;

    expect(list.length).toBe(1);

    fireEvent.click(button);

    state = store.getState();
    list = state.todo.list;

    expect(list.length).toBe(0);
  });
});
