import React, {
  createContext,
  useReducer,
  Reducer,
  useContext,
  useRef,
  MutableRefObject,
} from "react";
import { FunctionComponent } from "react";

interface State {
  id: number | null;
  text: string;
  done: boolean;
}
interface Action {
  type: "CREATE" | "TOGGLE" | "REMOVE";
  id?: number | null;
  todo?: State;
}

const todoReducer = (state: State[], action: Action): any => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.todo];
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

const TodoStateContext = createContext<State[] | null>([]);
const TodoDispatchContext = createContext<React.Dispatch<Action>>(() => {});
const TodoIdContext = createContext<MutableRefObject<number> | null>(null);

export const TodoProvider: FunctionComponent<ChildrenProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<Reducer<State[], Action>>(
    todoReducer,
    []
  );
  const id = useRef(0);

  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoIdContext.Provider value={id}>{children}</TodoIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
};

export const useTodoState = () => {
  const context = useContext(TodoStateContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};

export const useTodoDispatch = () => {
  const context = useContext(TodoDispatchContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};

export const useTodoId = () => {
  const context = useContext(TodoIdContext);
  if (!context) {
    throw new Error("Cannot find TodoProvider");
  }
  return context;
};
