import React from "react";
import styled from "styled-components";
import Items from "./Items";
import { useTodoState } from "../Context";

const ListBlock = styled.div`
  flex: 1;
  padding: 18px 22px 14px;
  overflow-y: auto;
`;

const List = () => {
  const todos = useTodoState();

  return (
    <ListBlock>
      {todos.map((todo) => (
        <Items key={todo.id} id={todo.id} text={todo.text} done={todo.done} />
      ))}
    </ListBlock>
  );
};

export default List;
