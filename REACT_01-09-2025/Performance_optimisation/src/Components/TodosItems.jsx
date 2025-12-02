import React from "react";

// const expensiveOperation = (value) => {
//   for (let i = 1; i < value; i++) {
//     continue;
//   }
//   return true;
// };

const TodosItems = ({ id, text, status }) => {
  // expensive operation sync-behaviour
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
        <h2>{text}</h2>
        <h3>{status ? "true" : "false"}</h3>
      </div>
    </>
  );
};

export default React.memo(TodosItems);
