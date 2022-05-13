import React, { Component } from "react";
import { connect } from "react-redux";
import {
  createPostRequest,
  getPostsRequest,
} from "../../redux/actions/postsActions";
import InputForm from "../InputForm/InputForm";
import Post from "../Post/Post";

//style

import "./Dashboard.css";

class DashboardApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }
  componentDidMount() {
    this.props.getPosts();
  }

  handleToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    return (
      <div className="Dashboard">
        <div className="Post-header">
          <div className="Post">
            <div className="Post-index">Sl No.</div>
            <div className="Post-id">Id</div>
            <div className="Post-title">Title</div>
            <div className="Post-btns">
              <button className="add" onClick={this.handleToggle}>
                Add
              </button>
            </div>
          </div>
        </div>
        {this.state.toggle ? (
          <InputForm
            title="Add data to list"
            handleToggle={this.handleToggle}
            cb={this.props.createPost}
          />
        ) : null}
        <div className="Posts">
          {this.props.posts.map((post, index) => (
            <Post post={post} index={index} key={post.id} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPosts: () => dispatch(getPostsRequest()),
    createPost: (post) => dispatch(createPostRequest(post)),
  };
};

const Dashboard = connect(mapStateToProps, mapDispatchToProps)(DashboardApp);

export default Dashboard;
