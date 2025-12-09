import React, { useState } from "react";
import TodosItems from "./TodosItems";
import { useCallback } from "react";

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
    setText("");
  };

  //With Dependency
  //   const handleEdits = useCallback(
  //     (id) => {
  //       let todoEdits = data.map((ed) =>
  //         ed.id === id ? { ...ed, status: !ed.status } : ed
  //       );
  //       setData(todoEdits);
  //     },
  //     [data]
  //   );

  //Without Dependency
  const handleEdits = useCallback((id) => {
    setData((prev) =>
      prev.map((ed) => (ed.id === id ? { ...ed, status: !ed.status } : ed))
    );
  }, []);

  //With Dependency
  //   const handleDelete = useCallback(
  //     (id) => {
  //       let todoEdits = data.filter((ed) => ed.id !== id);
  //       setData(todoEdits);
  //     },
  //     [data]
  //   );

  //Without Dependency
  const handleDelete = useCallback((id) => {
    setData((prev) => prev.filter((ed) => ed.id !== id));
  }, []);

  return (
    <>
      <input
        // value={text}
        defaultValue={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleInput}>click</button>
      {data &&
        data.map((el) => {
          return (
            <TodosItems
              key={el.id}
              {...el}
              handleEdits={handleEdits}
              handleDelete={handleDelete}
            />
          );
        })}
    </>
  );
};

{
  /* <TodosItems id={el.id} text={el.currentTodo} status={el.status} /> */
}
