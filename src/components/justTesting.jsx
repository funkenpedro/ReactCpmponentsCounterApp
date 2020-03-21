import React, { Component } from "react";
import Counter from "./counter";
class JustTesting extends Component {
  state = {};
  render() {
    return <Counter />;
  }
}

export function myFunction() {
  return "myFunction String";
}

export default JustTesting;
