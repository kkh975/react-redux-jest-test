import * as React from "react";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { modifyTodo, removeTodo, toggleTodo } from "./actions/todo";
import { TODO } from "./reducers/todo";
import Item from "./Item";

interface Props extends TODO {}

const ItemWrap: React.FC<Props> = ({ id, isDone, title }) => {
  const dispatch = useDispatch();

  const handleToggle = useCallback(() => {
    dispatch(toggleTodo({ id }));
  }, [dispatch, id]);

  const handleChange = useCallback(
    (text) => {
      dispatch(
        modifyTodo({
          id,
          title: text
        })
      );
    },
    [dispatch, id]
  );

  const handleRemove = useCallback(() => {
    dispatch(removeTodo({ id }));
  }, [dispatch, id]);

  return (
    <div>
      <Item
        isDone={isDone}
        text={title}
        onToggle={handleToggle}
        onDone={handleChange}
        onRemove={handleRemove}
      />
    </div>
  );
};

export default ItemWrap;
