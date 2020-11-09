import * as React from "react";
import { useCallback, useState, useEffect } from "react";
import { InputStyled, ButtonStyled } from "./Input.style";

export interface InputProps {
  mode: "create" | "modify";
  value?: string;
  onDone: (title: string) => void;
}

const Input: React.FC<InputProps> = ({ mode, value = "", onDone }) => {
  const [val, setVal] = useState<string>(value);
  const handleChnage = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  }, []);
  const handleDone = useCallback(
    (t: string) => {
      if (t.length > 0) {
        setVal("");
        onDone(t);
      }
    },
    [onDone]
  );
  const handlerKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleDone(val);
      }
    },
    [handleDone, val]
  );
  const handlerClick = useCallback(() => {
    handleDone(val);
  }, [handleDone, val]);

  useEffect(() => {
    setVal((prev) => (prev !== value ? value : prev));
  }, [value]);

  return (
    <div>
      <InputStyled
        type="text"
        value={val}
        onChange={handleChnage}
        onKeyDown={handlerKeyDown}
      />
      <ButtonStyled type="button" onClick={handlerClick}>
        {mode === "create" ? "추가" : "수정"}
      </ButtonStyled>
    </div>
  );
};

export default Input;
