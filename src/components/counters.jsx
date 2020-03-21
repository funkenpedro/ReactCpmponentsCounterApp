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
  handleDelete = () => {
    console.log("Evnent Handler called");
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={this.handleDelete}
            value={counter.value}
            selected={true}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
