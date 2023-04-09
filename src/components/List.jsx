import React from "react";
import styled from "styled-components";
import Items from "./Items";

const ListBlock = styled.div`
  flex: 1;
  padding: 18px 22px 14px;
  overflow-y: auto;
`;

const List = () => {
  return (
    <ListBlock>
      <Items text="테스트 아이템" done={true}></Items>
      <Items text="테스트 아이템2" done={true}></Items>
      <Items text="테스트 아이템3" done={false}></Items>
      <Items text="테스트 아이템4" done={false}></Items>
    </ListBlock>
  );
};

export default List;
