import React from "react";
import { createGlobalStyle } from "styled-components";
import Template from './components/Template';

const GlobalStyle = createGlobalStyle`
  body {
    background: rgb(255, 255, 255);
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Template></Template>
    </>
  );
}

export default App;
