import React, { Component } from "react";
//Convert Stateless componnent to a Stateless Functional component use sfm in simple react snippets
const Navbar = props => {
  //class Navbar extends Component {
  //  render() {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill badge-secondary  ">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
  //}
};

export default Navbar;
