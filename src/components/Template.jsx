import React from "react";
import styled from "styled-components";
import blackboard from "../img/blackboard.png";

const TemplateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Components = styled.div`
  background: #efef56;
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 400px;
  // border-radius: 16px;
  // box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Template = ({ children }) => {
  return (
    <>
      <TemplateBox>
        <Image src={blackboard} alt="Blackboard" />
        <Components>{children}</Components>
      </TemplateBox>
    </>
  );
};

export default Template;
