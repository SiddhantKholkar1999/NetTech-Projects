import { useRef } from "react";
import { nanoid } from "nanoid";
import axios from "axios";
import { useState } from "react";
import { ListTodo } from "./ListTodo";

export const Todos = () => {
  let api = `https://api-database-1.onrender.com/ToDo`;

  const dataRef = useRef(null);
  const [count, setCount] = useState(0);

  const handleClick = async () => {
    const values = dataRef.current.value.trim();

    let objectData = {
      id: nanoid(),
      todo: values,
      isEdit: false,
      isCompleted: false,
    };

    try {
      if (values === "") return;
      let res = await axios.post(api, objectData);
      setCount((prev) => prev + 1);
      console.log("REST API ==> POST");
      console.log("RES : ", res);
      dataRef.current.value = null;
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };
  return (
    <>
      <h1>TODO with API</h1>
      <input type="text" placeholder="add todo....." ref={dataRef} />
      <input
        className="btn_add"
        type="button"
        value="add todo"
        onClick={handleClick}
      />
      {/* <div>Todos</div> */}
      <ListTodo props={count} />
    </>
  );
};
