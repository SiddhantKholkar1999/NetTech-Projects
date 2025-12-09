import React, { useMemo } from "react";

const expensiveOperation = (value) => {
  let start = Date.now();
  while (Date.now() - start <= value) {
    continue;
  }
  return true;
};

// const TodosItems = ({ id, text, status }) => {
const TodosItems = ({ id, currentTodo, status, handleDelete, handleEdits }) => {
  // expensive operation sync-behaviour
  useMemo(() => expensiveOperation(200), []);
  //   expensiveOperation(200);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0.5 em 0",
          gap: "2em",
        }}
      >
        <h3>{id}</h3>
        {/* <h2>{text}</h2> */}
        <h2>{currentTodo}</h2>
        <h3>{status ? "true" : "false"}</h3>
        <button onClick={() => handleEdits(id)}>edit</button>
        <button onClick={() => handleDelete(id)}>delete</button>
      </div>
    </>
  );
};

// const checkEquals = (prevValue, currentValue) => {
//   return (
//     prevValue.currentTodo === currentValue.currentTodo &&
//     prevValue.status === currentValue.status
//   );
// };

// higher order components
// export default TodosItems;
export default React.memo(TodosItems);
// export default React.memo(TodosItems, checkEquals);
