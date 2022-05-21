import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {};

  render() {
    return (
      <div>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.renderTags()}
      </div>
    );
  }

  renderTags() {
    if (this.props.counters.length === 0) return <p>There are No Items.</p>;
    return (
      <ul>
        {this.props.counters.map((counter) => (
          <li key={counter.id}>
            <Counter
              counter={counter}
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default Counters;
