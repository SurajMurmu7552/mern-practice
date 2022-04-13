import React, { Component } from "react";

export default class DispalySalary extends Component {
  render() {
    return (
      <div>
        <h3>DispalySalary component</h3>
        <p>Salary is : Rs {this.props.empSalary()}</p>
      </div>
    );
  }
}
