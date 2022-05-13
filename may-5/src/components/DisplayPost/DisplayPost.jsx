import React, { Component } from "react";
import { connect } from "react-redux";
import { getPostsByIdRequest } from "../../redux/actions/postsActions";

class DisplayPostApp extends Component {
  componentDidMount() {
    this.props.getPostsById(this.props.post_id);
  }
  render() {
    return (
      <div className="DisplayPost">
        <div className="Post-id">{this.props.post.id}</div>
        <div className="Post-title">{this.props.post.title}</div>
        <div className="Post-body">{this.props.post.body}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    post_id: state.post_id,
    post: state.post,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPostsById: (id) => dispatch(getPostsByIdRequest(id)),
  };
};

const DisplayPost = connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayPostApp);

export default DisplayPost;
