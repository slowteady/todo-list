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
        {/* map으로 반복문 처리 */} 
        <Items key={1} id={1} text={"test"} done={false} />         
    </ListBlock>
    );
};

export default List;
