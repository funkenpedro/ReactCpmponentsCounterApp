/*

in index.js the ReactDOM.render renders a single component but you can 
build a tree of components under  that that will be rendered.



++++++++++++++++++++++++++++++++
composing components
++++++++++++++++++++++++++++++
we have an app that renders a counter component
one component 
instead create a counters component and render that in index.js
in that, you can render several counter components

possible to create an array of counter objects in Counters.state
then render this.state.counters.map(counter => <Counter key={counter._id}>)
*/

import React, { Component } from "react";
import { myFunction } from "./justTesting";

class Counter extends Component {
  state = {
    count: 0
  };
  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };
  passAnArgument = argument => {
    console.log(argument);
  };
  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.incrementCounter}
          className="btn btn-scondary btn-sm"
        >
          Increment
        </button>
        <button onClick={() => this.passAnArgument("myargument")}>
          PassAnArgument
        </button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
