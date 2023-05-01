import React, {
  ReactNode,
  createContext,
  useReducer,
  useRef,
  useContext,
} from "react";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type Action =
  | { type: "CREATE"; todo: Todo }
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number }
  | { type: never };

const assertNever = (value: never): never  => {
  throw new Error(`Unhandled action type: ${value}`);
}

const reducer = (state: Todo[], action: Action): Todo[] | void => {
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
      assertNever(action);
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

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, []);
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
