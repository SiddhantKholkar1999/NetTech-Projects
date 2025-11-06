import React from "react";
import { useState } from "react";

export const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, pass };
    handleLogin(payload);
  };
  return (
    <>
      <form action="#" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter Email ...."
        />
        <input
          onChange={(e) => setPass(e.target.value)}
          type="text"
          placeholder="Enter Password ...."
        />
        <input type="submit" />
      </form>
    </>
  );
};
