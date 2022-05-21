import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navBar";

class App extends Component {
  state = {
    counters: [
      {
        id: 1,
        name: "Product 1",
        value: 0,
        selected: false,
        imageUrl: "http://picsum.photos/50",
      },
      {
        id: 2,
        name: "Product 2",
        value: 4,
        selected: false,
        imageUrl: "http://picsum.photos/50",
      },
      {
        id: 3,
        name: "Product 3",
        value: 2,
        selected: false,
        imageUrl: "http://picsum.photos/50",
      },
      {
        id: 4,
        name: "Product 4",
        value: 1,
        selected: false,
        imageUrl: "http://picsum.photos/50",
      },
    ],
  };

  render() {
    return (
      <div className="App">
        <NavBar counters={this.state.counters} />
        <div className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }

  handleIncrement = (counter) => {
    console.log("Increment", counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    if (counter.value != 0) {
      console.log("Increment", counter);
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id != counterId);
    this.setState({ counters });
  };

  handleReset = (counterId) => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
}

export default App;
