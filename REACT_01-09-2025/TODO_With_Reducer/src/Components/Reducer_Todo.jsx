import { useReducer, useRef } from "react";

import { Reducer } from "../Reducer/Reducer";
import { InitialValue } from "../Reducer/Store";
import { ADD_TODO } from "../Reducer/Action";
import { Reducer_List } from "./Reducer_List";

export const Reducer_Todo = () => {
  const inputData = useRef(null);
  const [state, dispatch] = useReducer(Reducer, InitialValue);

  const handleTodo = () => {
    if (inputData.current.value === "") return;

    let todos = {
      id: Date.now(),
      todoText: inputData.current.value,
      isEdit: false,
      isComplete: false,
    };

    dispatch({ type: ADD_TODO, payload: todos });
    inputData.current.value = "";
  };
  return (
    <>
      <h1>Reducer_Todo....</h1>
      <input type="text" name="todo_input" ref={inputData} />
      <button onClick={handleTodo}>add todo</button>
      <Reducer_List state={state} dispatch={dispatch} />
    </>
  );
};
