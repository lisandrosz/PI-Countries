import React from "react";
import { Link } from "react-router-dom";
import {
  StyleNavBar,
  P,
  H1,
  HomeDiv,
  Div,
  LinkDiv,
} from "../styles/styleNavBar";

const NavBar = (props) => {
  return (
    <StyleNavBar>
      <HomeDiv>
        <H1>Countries App</H1>
        <LinkDiv>
          <Link to={"/home"}>
            <P>Home</P>
          </Link>
          <Link to={"/activity"}>
            <P>Create Activity</P>
          </Link>
        </LinkDiv>
      </HomeDiv>

      <Div>
        <input type="text" placeholder="Argentina..."></input>
        <button>Buscar</button>
      </Div>
    </StyleNavBar>
  );
};

export default NavBar;
