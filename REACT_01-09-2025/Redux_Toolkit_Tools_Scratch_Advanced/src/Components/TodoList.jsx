/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { todo } from "../Reducer/Reducer";
import * as types from "../Reducer/Actions";

export const TodoList = () => {
  const todos = useSelector(todo);
  console.log("🚀 ~ todos:", todos);
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    let todohttp = {
      text: todo.text,
      isCompleted: false,
      isEdits: true,
    };
    dispatch();
    // dispatch(types.updateTodos(id, { isEdits: true }));
  };

  const handleDelete = (id) => {
    dispatch(types.deleteTodos(id));
  };

  return (
    <>
      {/* <div>TodoList</div> */}
      <h1>Todo List</h1>
      {todos?.map((el) => {
        return (
          <div key={el.id}>
            <input type="checkbox" />
            <h4>{el.id}</h4>
            <p>{!el.text ? "noValue" : el.text}</p>
            <button onClick={() => handleEdit(el.id)}>edit</button>
            <button onClick={() => handleDelete(el.id)}>delete</button>
          </div>
        );
      })}
    </>
  );
};
