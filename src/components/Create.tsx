import React, { ChangeEvent, FormEvent, useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoId } from "../Context";

interface buttonProps {
  open: boolean;
}
const Button = styled.button<buttonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 45%;
  bottom: 10%;
  font-size: 24px;
  z-index: 5;
  transform: translate(-50%, 50%);
  transition: 0.125s all ease-in;
  outline: none;
  width: 45px;
  height: 45px;
  color: white;
  background: #38d9a9;
  border: none;
  display: block;
  cursor: pointer;
  border-radius: 50%;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      bottom: 14%;
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;
const InsertFormBox = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;
const Input = styled.input`
  padding: 7px;
  width: 100%;
  align-self: center;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  outline: none;
  font-size: 14px;
  box-sizing: border-box;
`;

const Create = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useTodoDispatch();
  const id = useTodoId();
  

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: id.current,
        text: value,
        done: false,
      },
    });
    setValue("");
    setOpen(false);
    id.current += 1;
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const onToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      {open && (
        <InsertFormBox>
          <form onSubmit={onSubmit}>
            <Input
              onChange={onChange}
              value={value}
              autoFocus
              placeholder="Todo 입력 후 Enter를 누르세요"
            />
          </form>
        </InsertFormBox>
      )}
      <Button onClick={onToggle} open={open}>
        <MdAdd />
      </Button>
    </>
  );
};

export default Create;
