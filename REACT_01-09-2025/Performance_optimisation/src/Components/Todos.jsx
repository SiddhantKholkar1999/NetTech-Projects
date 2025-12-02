import React, { useState } from "react";
import TodosItems from "./TodosItems";

const initialTodos = [
  {
    id: 1,
    currentTodo: "Task 1 - Hello",
    status: false,
  },
  {
    id: 2,
    currentTodo: "Task 2 - Hello",
    status: false,
  },
];

export const Todos = () => {
  const [text, setText] = useState("");
  const [data, setData] = useState(initialTodos);

  const handleInput = () => {
    const Value = {
      id: data.length + 1,
      currentTodo: text,
      status: false,
    };
    setData([...data, Value]);
    console.log(setText(""));
    setText("");
  };

  return (
    <>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleInput}>click</button>
      {data &&
        data.map((el) => {
          return (
            <TodosItems id={el.id} text={el.currentTodo} status={el.status} />
          );
        })}
    </>
  );
};
