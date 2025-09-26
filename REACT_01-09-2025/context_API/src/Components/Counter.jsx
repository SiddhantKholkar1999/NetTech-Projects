import { CounterContext } from "../Context/CounterContext";
import { useContext } from "react";

export const Counter = () => {
  const { count, setCount, name } = useContext(CounterContext);
  return (
    <>
      <p>
        <u>This is from "Counter.jsx"</u>
      </p>
      <h1>my name is {name}</h1>
      <h1>count is {count > 0 ? count : 0}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </>
  );
};
