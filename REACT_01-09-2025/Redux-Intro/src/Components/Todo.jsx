/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_TODO } from "../Redux/Action";

export const Todo = () => {
  const refData = useRef(null);
  const dispatch = useDispatch();
  //useSelector() - A function that takes a selector function as its first argument.
  // The selector function is responsible for selecting a part of the Redux store's state or computing derived data.
  const data = useSelector((state) => console.log(state));

  const handleClick = () => {
    let val = refData.current.value;
    dispatch({ type: ADD_TODO, payload: val });
  };

  return (
    <>
      {/* <div>Todo</div> */}
      <h1>TODO</h1>
      <input type="text" ref={refData} />
      <button onClick={handleClick}>add</button>
    </>
  );
};
