import React, { Component } from "react";
import { myFunction } from "./justTesting";

class Counter extends Component {
  state = {
    count: this.props.value
  };
  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };
  passAnArgument = argument => {
    console.log(argument);
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.incrementCounter}
          className="btn btn-scondary btn-sm"
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.id)}
        >
          Delete
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
