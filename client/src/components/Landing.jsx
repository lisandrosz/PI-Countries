import React from "react";
import { Link } from "react-router-dom";
import { Container, BotonIngresar } from "../styles/styleLanding";

const Landing = (props) => {
  return (
    <Container>
      <Link to={"/home"}>
        <BotonIngresar>Ingresar</BotonIngresar>
      </Link>
    </Container>
  );
};

export default Landing;
