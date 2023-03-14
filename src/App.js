import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const app = () => {
  return (
    <>
      <GlobalStyle />    
      <div>안녕하세요</div>
    </>
  )
}

export default app;