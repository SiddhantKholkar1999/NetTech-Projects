import React, { useState } from "react";
import { TODOInput } from "./TODOInput";
import { TODOList } from "./TODOList";

export const TODOUseStateUseRef = () => {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);

  return (
    <>
      <div>
        <h2>TODO (useState + useRef) </h2>
        <TODOInput todos={todos} setTodos={setTodos} />
        <br></br>
        <TODOList
          todos={todos}
          setTodos={setTodos}
          edit={edit}
          setEdit={setEdit}
        />
      </div>
    </>
  );
};
