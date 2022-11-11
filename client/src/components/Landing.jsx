import React from "react";
import { Link } from "react-router-dom";

const Landing = (props) => {
  return (
    <>
      <h1>Soy el landing</h1>
      <Link to={"/home"}>
        <button>Ingresar</button>
      </Link>
    </>
  );
};

export default Landing;
