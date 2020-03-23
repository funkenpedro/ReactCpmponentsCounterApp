import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import { render } from "@testing-library/react";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 6 },
      { id: 4, value: 8 },
      { id: 5, value: 10 }
    ]
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters: counters });
  };
  handleDelete = counterId => {
    console.log("Evnent Handler called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };
  handleIncrement = counter => {
    console.log("Increment handler called", counter);
    const counters = [...this.state.counters]; // copy of counters array, with original counter objects inside
    const index = counters.indexOf(counter);
    counters[index] = { ...counter }; // copy of contents of counter object desired
    counters[index].value++;
    console.log(this.state.counters[index]);
    this.setState({ counters: counters }); // overwrite original state object
  };
  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          onReset={this.handleReset}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
        />
      </React.Fragment>
    );
  }
}

export default App;
