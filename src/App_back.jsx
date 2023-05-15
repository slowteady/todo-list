import React from "react";
import { createGlobalStyle } from "styled-components";
import Template from "./components/Template";
import Head from "./components/Head";
import List from "./components/List";
import Create from "./components/Create";
import { TodoProvider } from "./Context";

const GlobalStyle = createGlobalStyle`
  body {
    background: rgb(255, 255, 255);
  }
`;

const App = () => {
  return (
    <TodoProvider>
      <GlobalStyle />
      <Template>
        <Head />
        <List />
        <Create />
      </Template>
    </TodoProvider>
  );
};

export default App;
