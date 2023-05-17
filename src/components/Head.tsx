import React from "react";
import styled from "styled-components";
import { useTodoState } from "../Context";

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

 // 날짜 
 const today = new Date();
 const dateString = today.toLocaleDateString("ko-KR", {
   year: "numeric",
   month: "long",
   day: "numeric",
 });
 const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

const Head = () => {
  const todos = useTodoState();
  const left = todos.filter((todo) => !todo.done).length;

  return (
    <HeadBox>
      <div className="datebox">
        <h1>{dateString}</h1>
        <div className="day">{dayName}</div>
      </div>
      <div className="tasks-left">{left} LEFT</div>
    </HeadBox>
  );
};

export default Head;
