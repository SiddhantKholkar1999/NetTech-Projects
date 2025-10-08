import React from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const { toggleAuth } = React.useContext(AuthContext);
  console.log("🚀 ~ toggleAuth:", toggleAuth);
  const navigat = useNavigate();
  if (toggleAuth) {
    navigat("/users");
  }
  return (
    <>
      <h1>Home</h1>
      <button onClick={toggleAuth}>login</button>
    </>
  );
};
