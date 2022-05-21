import React, { Component } from "react";

class Counter extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div>
        <img src={this.props.counter.imageUrl} />
        <span className="m-2"> {this.props.counter.name} </span>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-secondary btn-sm m-2"
          onClick={() => this.props.onDecrement(this.props.counter)}
        >
          Decrement
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge badge-pill m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
