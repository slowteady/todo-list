import React, { FunctionComponent } from "react";
import styled from "styled-components";
import blackboard from "../img/blackboard.png";

const TemplateBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Components = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 400px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Template: FunctionComponent<ChildrenProps> = ({ children }) => {
  return (
    <TemplateBox>
      <Image src={blackboard} alt="blackboard" />
      <Components>{children}</Components>
    </TemplateBox>
  );
};

export default Template;
