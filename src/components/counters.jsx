import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
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
      c.value = 0; // this reset function will reset the value of each counter in the counter array
      return c; // but the dom doesnt get updated because the counter in counter.jsx
    }); // has property this.props.counter.value which only gets initialized
    // from this array once
    this.setState({ counters: counters });
  };
  handleDelete = counterId => {
    console.log("Evnent Handler called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };
  render() {
    return (
      <div>
        <button // Added button here to demonstrate a problem, see onclick function
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter} // passing the whole object as a prop instead of the objects state properties below
            //value={counter.value}
            //id={counter.id}
            // this will require an update in the call from the other object
            // for instance in counter.jsx change this.props.id to this.props.counter.id
          />
        ))}
      </div>
    );
  }
}

export default Counters;
