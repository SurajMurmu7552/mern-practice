import React, { Component } from "react";

import "./Dashboard.css";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  getPosts = async () => {
    let res = await fetch("https://retoolapi.dev/BUCPSc/posts");

    let data = await res.json();
    console.log(data);

    return data;
  };

  componentDidMount() {
    this.getPosts().then((data) => this.setState({ data }));
  }
  render() {
    return (
      <div>
        <div className="Dashboard-element">
          <div className="Dashboard-title header">Title</div>
          <div className="Dashboard-body header">Body</div>
        </div>
        {this.state.data.map((element) => (
          <div className="Dashboard-element" key={element.id}>
            <div className="Dashboard-title">{element.title}</div>
            <div className="Dashboard-body">{element.body}</div>
          </div>
        ))}
      </div>
    );
  }
}
