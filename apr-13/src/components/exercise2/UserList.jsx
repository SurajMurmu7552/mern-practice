import React, { Component } from "react";

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getProductsList();
    console.log(this.state.data);
  }

  getProductsList = async () => {
    let res = await fetch("https://reqres.in/api/users?page=2");
    let user = await res.json();

    this.setState({ data: user.data });
  };
  render() {
    return (
      <div className="productList">
        <h3 style={{ textAlign: "left" }}>User list</h3>
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>avatar</th>
          </tr>
          {this.state.data.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>
                {user.first_name} {user.last_name}
              </td>

              <td>{user.email}</td>
              <td>
                <img src={user.avatar} alt="no user info" />
              </td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
