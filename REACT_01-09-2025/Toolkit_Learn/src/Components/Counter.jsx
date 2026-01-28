import React from 'react'
import {useDispatch, useSelector} from "react-redux";

export const Counter = () => {
    const count = useSelector((state) => state.count);
    const dispatch = useDispatch();

  return (
    <>
          <h1>Counter{count}</h1>
          <button onClick={()=>}>dec</button>
          <button onClick={()=>}>res</button>
          <button onClick={()=>}>inc</button>
    </>
  );
}
