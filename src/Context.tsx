import React, { createContext, useReducer, Reducer, ReactNode } from "react";
import { FunctionComponent } from "react";

interface State {
  id: number;
  text: string;
  done: boolean;
}
interface Action {
  type: "CREATE" | "TOGGLE";
  todo: State[];
}

const todoReducer = (state: State[], action: Action): any => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.todo];
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const TodoStateContext = createContext<State[] | null>([]);
const TodoDispatchContext = createContext<React.Dispatch<Action>>(() => {});

export const TodoProvider: FunctionComponent<ChildrenProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<Reducer<State[], Action>>(
    todoReducer,
    []
  );
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};
