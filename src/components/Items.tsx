import React, { FunctionComponent } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const Remove = styled.div`
  display: flex;
  display: none;
  cursor: pointer;
  font-size: 18px;
  align-items: center;
  justify-content: center;
  &:hover {
    color: #ff6b6b;
  }
`;
const ItemBox = styled.div`
  display: flex;
  margin: 10px 0 10px 0;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;
const Text = styled.div<checkBoxProps>`
  max-width: 500px;
  flex: 1;
  color: #ced4da;
  font-size: 18px;
  ${(props) =>
    props.done &&
    css`
      color: #495057;
    `}
`;
const CheckBox = styled.div<checkBoxProps>`
  width: 18px;
  height: 18px;
  display: flex;
  margin-right: 10px;
  border-radius: 16px;
  border: 1px solid #38d9a9;
  font-size: 18px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid rgb(55 56 58);
      color: rgb(55 56 58);
    `}
`;

interface checkBoxProps {
  done: boolean;
}

interface childrenNode extends checkBoxProps {
  id: number;
  text: string;
}

const onRemove = () => {

}

const Items: FunctionComponent<childrenNode> = ({ id, text, done }) => {
  return (
    <ItemBox>
      <CheckBox done={done}>
        {done && <MdDone />}
      </CheckBox>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </ItemBox>
  );
};

export default Items;
