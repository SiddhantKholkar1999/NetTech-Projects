import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const data = [
    { path: "/", element: "home" },
    { path: "/login", element: "login" },
  ];

  return (
    <>
      {data.map((el) => (
        <NavLink to={el.path} key={el.path}>
          {el.element}
        </NavLink>
      ))}
    </>
  );
};
