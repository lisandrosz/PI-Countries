import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <h1>Soy el Home</h1>

      <Link to={"/details"}>Country details</Link>
      <br />
      <Link to={"/activity"}>Create Activity</Link>
    </>
  );
};

export default Home;
