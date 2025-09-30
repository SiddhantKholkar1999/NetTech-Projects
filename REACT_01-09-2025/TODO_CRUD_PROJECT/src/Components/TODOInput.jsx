import { useRef } from "react";

export const TODOInput = ({ todos, setTodos }) => {
  const inputRef = useRef();

  const addToDo = () => {
    const text = inputRef.current.value.trim();
    if (text === "") return;
    let todoObject = { id: Date.now(), text, isDone: false, isCheck: false };
    setTodos([...todos, todoObject]);
    inputRef.current.value = "";
    console.log(todos);
  };
  return (
    <>
      <div>
        <input ref={inputRef} placeholder="Type to Add Task" />
        <button onClick={addToDo}>Add</button>
      </div>
    </>
  );
};
