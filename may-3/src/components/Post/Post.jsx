import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deletePost,
  savePostId,
  updatePost,
} from "../../redux/actions/postsActions";
import InputForm from "../InputForm/InputForm";

//style
import "./Post.css";

function PostApp({ post, index, deletePost, savePostId, updatePost }) {
  const navigate = useNavigate();

  const [state, setState] = useState(false);

  const handleShowPost = () => {
    savePostId(post.id);
    navigate("/post");
  };

  const handleUpdate = (data) => {
    updatePost({
      id: post.id,
      ...data,
    });
  };

  const handleToggle = () => {
    setState((prev) => !prev);
  };

  return (
    <div className="Post">
      <div className="Post-index">{index + 1}</div>
      <div className="Post-id">{post.id}</div>
      <div className="Post-title">{post.title}</div>
      <div className="Post-btns">
        <button className="show" onClick={handleShowPost}>
          Show
        </button>
        <button className="update" onClick={() => handleToggle()}>
          Update
        </button>
        <button className="delete" onClick={() => deletePost(post.id)}>
          Delete
        </button>
      </div>
      {state ? (
        <InputForm
          title="Update Data"
          handleToggle={handleToggle}
          cb={handleUpdate}
        />
      ) : null}
    </div>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
    savePostId: (id) => dispatch(savePostId(id)),
    updatePost: (post) => dispatch(updatePost(post)),
  };
};

const Post = connect(mapStateToProps, mapDispatchToProps)(PostApp);

export default Post;
