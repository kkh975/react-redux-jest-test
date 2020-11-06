import * as React from "react";
import { useSelector } from "react-redux";
import { ROOT_STATE } from "./reducers";
import { TODO } from "./reducers/todo";
import ItemWrap from "./ItemWrap";
import { ListStyled, ItemStyled } from "./List.style";

interface Props {}

const List: React.FC<Props> = () => {
  const list = useSelector<ROOT_STATE>((state) => state.todo.list) as TODO[];

  return (
    <div>
      <ListStyled>
        {list.map((e, idx) => (
          <ItemStyled key={idx}>
            <ItemWrap {...e} />
          </ItemStyled>
        ))}
      </ListStyled>
    </div>
  );
};

export default List;
