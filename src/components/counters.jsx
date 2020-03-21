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
  handleDelete = counterId => {
    console.log("Evnent Handler called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };
  render() {
    return (
      <div>
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
