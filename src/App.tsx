import React from "react";
import { createGlobalStyle } from "styled-components";
import Template from "./components/Template";
import Head from "./components/Head";

const GlobalStyle = createGlobalStyle`
  body {
    background: rgb(255, 255, 255);
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Template>
        <Head />
      </Template>
    </>
  );
};

export default App;
