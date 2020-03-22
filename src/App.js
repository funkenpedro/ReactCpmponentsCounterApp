import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";

function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
      </nav>
      <Counters />
    </React.Fragment>
  );
}

export default App;
