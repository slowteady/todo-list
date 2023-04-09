import React, { createContext, useContext, useReducer, useRef } from "react";

const initialList = [
  {
    id: 1,
    text: "테스트 아이템1",
    done: true,
  },
  {
    id: 2,
    text: "테스트 아이템2",
    done: true,
  },
  {
    id: 3,
    text: "테스트 아이템3",
    done: false,
  },
  {
    id: 4,
    text: "테스트 아이템4",
    done: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const StateContext = createContext();
const DispatchContext = createContext();
const NextIdContext = createContext();

export const useTodoState = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};

export const useTodoDispatch = () => {
  const context = useContext(DispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};

export const useTodoNextId = () => {
  const context = useContext(NextIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialList);
  const nextId = useRef(5);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <NextIdContext.Provider value={nextId}>
          {children}
        </NextIdContext.Provider>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};
