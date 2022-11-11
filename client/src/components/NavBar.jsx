import React from "react";
import { Link } from "react-router-dom";

const NavBar = (props) => {
  return (
    <>
      <h1>Soy el NavBar</h1>
      <Link to={"/home"}> home</Link>
      <hr />
    </>
  );
};

export default NavBar;
