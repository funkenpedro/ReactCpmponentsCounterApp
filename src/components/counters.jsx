import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  // Counters becomes a controlled component in this step. all references to this.state are removed
  render() {
    return (
      <div>
        <button
          onClick={this.props.onReset} //changed function to call parent component (App.js)
          className="btn btn-primary btn-sm m-2"
        >
          Reset
        </button>
        {this.props.counters.map((
          counter // changed from this.state.counters - in app.js counters prop is created - muey importante
        ) => (
          <Counter
            key={counter.id}
            onDelete={this.props.onDelete} //changed function to call parent component (App.js)_
            onIncrement={this.props.onIncrement} // here also
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
