import React from "react";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import blackboard from './img/blackboard.png';

const GlobalStyle = createGlobalStyle`
  body {
    background: rgb(255, 255, 255);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Image src={blackboard} alt="Blackboard" />
    </>
  );
}

export default App;
