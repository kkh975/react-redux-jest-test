import * as React from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import { createGlobalStyle } from "styled-components";

import CreateInput from "./CreateInput";
import List from "./List";
import "./styles.css";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  input {
    padding: 0 5px;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Provider store={store}>
        <CreateInput />
        <List />
      </Provider>
    </>
  );
}
