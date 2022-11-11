import { Route } from "react-router-dom";
import "./App.css";
import CountryDetails from "./components/CountryDetails";
import CreateActivity from "./components/CreateActivity";
import Home from "./components/Home";
import Landing from "./components/Landing";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Route exact path={"/"}>
        <Landing />
      </Route>

      <Route exact path={"/home"}>
        <NavBar />
        <Home />
      </Route>

      <Route exact path={"/details"}>
        <NavBar />
        <CountryDetails />
      </Route>

      <Route exact path={"/activity"}>
        <NavBar />
        <CreateActivity />
      </Route>
    </div>
  );
}

export default App;
