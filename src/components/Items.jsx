import React, { memo } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../Context";

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

const Text = styled.div`
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
const CheckBox = styled.div`
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

const Items = ({ id, text, done }) => {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });
  return (
    <ItemBox>
      <CheckBox onClick={onToggle} done={done}>
        {done && <MdDone />}
      </CheckBox>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </ItemBox>
  );
};

export default memo(Items);
