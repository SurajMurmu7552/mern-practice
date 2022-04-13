import React, { Component } from "react";
import DispalySalary from "./DispalySalary";
import DisplayEmployeeData from "./DisplayEmployeeData";

export default class Employee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      name: "Daniel",
      isPresent: true,
      salary: 2000,
      leaves: [2, 8, 12, 15],
      contact: {
        phone: ["810922xxxx", "810933xxx"],
        address: "New Lane City",
      },
    };

    // this.calculateSalary.bind(this);
  }

  calculateSalary = () => {
    return (31 - this.state.leaves.length) * this.state.salary;
  };

  render() {
    return (
      <div>
        <h3>Employee Data Component</h3>
        <DisplayEmployeeData
          empData={this.state}
          empSalary={this.calculateSalary}
        />
        <DispalySalary empSalary={this.calculateSalary} />
      </div>
    );
  }
}
