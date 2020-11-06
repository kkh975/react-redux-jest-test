import * as React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
  let handleDone: jest.Mock;
  let result: RenderResult;
  let input: HTMLElement;
  let button: HTMLElement;

  beforeEach(() => {
    handleDone = jest.fn();
    result = render(<Input onDone={handleDone} />);
    input = result.getByRole("textbox");
    button = result.getByRole("button");
  });

  describe("handlerClick", () => {
    it("has value", () => {
      fireEvent.change(input, { target: { value: "aaa" } });
      fireEvent.keyDown(input, { keyCode: 13 });

      expect(handleDone).toHaveBeenCalled();
    });
    it("has not value", () => {
      fireEvent.keyDown(input, { keyCode: 13 });

      expect(handleDone).not.toHaveBeenCalled();
    });
  });

  describe("handlerKeyDown", () => {
    it("has value", () => {
      fireEvent.change(input, { target: { value: "aaa" } });
      fireEvent.click(button);

      expect(handleDone).toHaveBeenCalled();
    });

    it("has not value", () => {
      fireEvent.click(button);

      expect(handleDone).not.toHaveBeenCalled();
    });
  });
});
