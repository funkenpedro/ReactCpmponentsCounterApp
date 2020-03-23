import React, { Component } from "react";
import { myFunction } from "./justTesting";

class Counter extends Component {
  //state = {
  //  count: this.props.counter.value
  //};

  // removing the state to make this a "Controlled Component"
  // so that the state only has one source of information

  //incrementCounter = () => {
  //  this.setState({ count: this.state.count + 1 });
  //  console.log(this.state.count);
  //};
  // deleting this function because it refers to this.state
  // creating an onincrement function in counters to handle the increment click

  passAnArgument = argument => {
    console.log(argument);
  };
  render() {
    console.log(this.props);
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          {" "}
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-scondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-scondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            Delete
          </button>
          <button onClick={() => this.passAnArgument("myargument")}>
            PassAnArgument
          </button>
        </div>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-scondary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-scondary btn-sm m-2"
        >
          -
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
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
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
