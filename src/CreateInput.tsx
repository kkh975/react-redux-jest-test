import * as React from "react";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "./actions/todo";
import Input from "./Input";

interface Props {}

const CreateInput: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const handleDone = useCallback(
    (title: string) => {
      dispatch(createTodo({ title }));
    },
    [dispatch]
  );

  return <Input mode="create" onDone={handleDone} />;
};

export default CreateInput;
