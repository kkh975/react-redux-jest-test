import * as React from "react";
import { render, fireEvent, RenderResult } from "@testing-library/react";
import Item from "./Item";

describe("Item Component", () => {
  let handleToggle: jest.Mock;
  let handleRemove: jest.Mock;
  let result: RenderResult;

  beforeEach(() => {
    handleToggle = jest.fn();
    handleRemove = jest.fn();
    result = render(
      <Item onToggle={handleToggle} onDone={() => {}} onRemove={handleRemove} />
    );
  });

  it("toggle", () => {
    const input = result.getByRole("checkbox");

    fireEvent.click(input);

    expect(handleToggle).toHaveBeenCalled();
  });

  it("remove", () => {
    const button = result.getByText("삭제");

    fireEvent.click(button);

    expect(handleRemove).toHaveBeenCalled();
  });
});
