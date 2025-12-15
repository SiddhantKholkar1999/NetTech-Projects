import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../Reducer/TodoReducer";

export const AddTodos = () => {
  const dispatch = useDispatch();
  const inputValue = useRef(null);

  const handleAdd = () => {
    const value = inputValue.current.value;
    dispatch(addTodos(value));
  };

  return (
    <>
      <input ref={inputValue} type="text" placeholder="Enter the Todo ...." />
      <button onClick={handleAdd}>Add</button>
    </>
  );
};
