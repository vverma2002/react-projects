import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          <span className="badge badge-pill badge-secondary m-2">
            {this.props.counters.filter((counter) => counter.value > 0).length}
          </span>
          Items ({this.getTotalItems()})
        </span>
      </nav>
    );
  }

  getTotalItems() {
    let total = 0;
    this.props.counters.forEach((counter) => {
      total += counter.value;
    });
    return total;
  }
}

export default Navbar;
