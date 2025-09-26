import { useState, createContext } from "react";

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider value={{ count, setCount, name: "siddhant" }}>
      {props.children}
    </CounterContext.Provider>
  );
};
