import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodos } from "../Reducer/TodoReducer";

export const ListTodos = () => {
  const { item } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeTodos(id));
  };
  return <>{item && item.map((el) => {})}</>;
};
