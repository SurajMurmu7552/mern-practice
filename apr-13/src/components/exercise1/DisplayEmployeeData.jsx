import React, { Component } from "react";

export default class DisplayEmployeeData extends Component {
  render() {
    return (
      <div>
        <h3>DisplayEmployeeData Component</h3>
        <div className="emp-data">
          <p>Id : {this.props.empData.id}</p>
          <p>Name : {this.props.empData.name}</p>
          <p>Salary : Rs {this.props.empSalary()}</p>
          <p>Leaves: {this.props.empData.leaves.join(", ")}</p>
          <p>
            Contact :<br /> Phone :{" "}
            {this.props.empData.contact.phone.join(", ")}
            <br />
            Address : {this.props.empData.contact.address}
          </p>
        </div>
      </div>
    );
  }
}
