import * as React from "react";
import { useCallback } from "react";
import Input from "./Input";
import { WrapStyled, ButtonStyled, InputStyled } from "./Item.style";

export interface ItemProps {
  isDone?: boolean;
  text?: string;
  onToggle: (isChecked: boolean) => void;
  onDone: (text: string) => void;
  onRemove: () => void;
}

const Item: React.FC<ItemProps> = ({
  isDone = false,
  text = "",
  onToggle,
  onDone,
  onRemove
}) => {
  const handleToggle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onToggle(e.target.checked);
    },
    [onToggle]
  );

  return (
    <WrapStyled>
      <InputStyled type="checkbox" onChange={handleToggle} checked={isDone} />
      <Input mode="modify" value={text} onDone={onDone} />
      <ButtonStyled type="button" onClick={onRemove}>
        삭제
      </ButtonStyled>
    </WrapStyled>
  );
};

export default Item;
