import React, { Component } from "react";

//api calls
import { getUsersList } from "../utils/api";
import User from "./User";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    getUsersList()
      .then((data) =>
        this.setState({
          data,
        })
      )
      .catch((err) => console.error(err));
  }
  render() {
    return (
      <div className="users">
        <ul className="list-items">
          <li className="list-item">
            <p>Name</p>
            <p>Email</p>
          </li>
          {this.state.data.map((user) => (
            <User user={user} key={user.id} />
          ))}
        </ul>
      </div>
    );
  }
}
