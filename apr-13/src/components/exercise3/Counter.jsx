import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div style={{ marginBottom: "40px" }}>
        <button type="submit" onClick={this.increment}>
          Increment Count
        </button>
        <button type="submit" onClick={this.decrement}>
          Decrement Count
        </button>
        <div className="count">Counter : {this.state.count}</div>
      </div>
    );
  }
}
