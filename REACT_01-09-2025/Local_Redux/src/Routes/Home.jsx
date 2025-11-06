import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Todo_Add } from "../Components/Todo_Add";
import { Todo_List } from "../Components/Todo_List";

export const Home = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const token = useSelector((state) => state.auth.token);

  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <h1>{token}</h1>
      <Todo_Add />
      <Todo_List />
    </>
  );
};
