import React from "react";
import styled from "styled-components";

const Components = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto; 
  background: yellow;
`;

const Template = ({ children }) => {
  return (
    <>
      <Components>{children}</Components>
    </>
  )
}

export default Template;