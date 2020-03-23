import React, { Component } from "react";

//const Navbar = props => {    -changed this declaration to use destructured object properties
const Navbar = ({ totalCounters }) => {
  // totalCounters is part of props - destructured object

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary  ">
          {totalCounters}
        </span>
      </a>
    </nav> // removed props. from totalCounters
  );
  //}
};

export default Navbar;
