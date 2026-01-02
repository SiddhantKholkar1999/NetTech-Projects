import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEven, selectedComponents } from "../Reducer/Selector";

import * as types from "../Reducer/Actions";

export const Counter = () => {
  const dispatch = useDispatch();

  const { count, random, updateByPayload } = useSelector(selectedComponents);
  const isEvenValue = useSelector(isEven);
  console.log("🚀 ~ isEvenValue:", isEvenValue);

  return (
    <>
      <h1>counter {count}</h1>
      <h1>sumOfNumberPayload {updateByPayload}</h1>
      <h1>unHandleAction {random}</h1>

      <h1>{isEvenValue ? "EVEN" : "ODD"}</h1>
      <button onClick={() => dispatch(types.increment())}>increment</button>
      <button onClick={() => dispatch(types.decrement())}>decrement</button>
      <button onClick={() => dispatch(types.randomNumber(10))}>
        random value by 10
      </button>
      <button onClick={() => dispatch(types.unknown())}>unknown</button>
      <button onClick={() => dispatch(types.randomNumber())}>random</button>
    </>
  );
};
