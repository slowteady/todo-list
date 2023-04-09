import React from "react";
import styled from "styled-components";
import { useStateContext } from "../Context";

const HeadBox = styled.div`
  padding: 28px 22px 14px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(90 152 93);
  h1 {
    margin: 0;
    font-size: 28px;
    color: rgb(31 32 33);
  }
  .day {
    font-size: 17px;
    margin-top: 5px;
  }
  .tasks-left {
    color: rgb(255 115 14);
    font-size: 15px;
    font-weight: bold;
    margin-top: 5px;
  }
`;

const Head = () => {
  const todos = useStateContext();
  const left = todos.filter(todo => !todo.done).length;

  return (
    <>
      <HeadBox>
        <div className="dateBox">
          <h1>TODAY</h1>
          <div className="day">수요일</div>
        </div>
        <div className="tasks-left">{left} LEFT</div>
      </HeadBox>
    </>
  );
};

export default Head;
