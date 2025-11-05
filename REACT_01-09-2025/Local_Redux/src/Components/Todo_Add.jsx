import { useDispatch } from "react-redux";
import { ADD_TODOS } from "../Redux/Todos/Action";
import { useRef } from "react";
import { Todo_List } from "./Todo_List";

export const Todo_Add = () => {
  let dataValue = useRef(null);
  const dispatch = useDispatch();

  const addTodos = () => {
    let values = dataValue.current.value;

    let todosObj = {
      id: Date.now(),
      text: values,
      isEdit: false,
      isComplete: false,
    };

    dispatch({ type: ADD_TODOS, payload: todosObj });
  };
  return (
    <>
      <h1>Todo_Add</h1>

      <input type="text" placeholder="Enter Todos..." ref={dataValue} />
      <button onClick={addTodos}>Add</button>

      <Todo_List />
    </>
  );
};
