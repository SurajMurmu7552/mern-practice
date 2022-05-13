const URL = "https://retoolapi.dev/BUCPSc/posts";

const requestData = () => ({
  type: "REQUEST",
});

const errData = (err) => ({
  type: "ERROR",
  payload: {
    err,
  },
});

const savePostId = (id) => {
  return {
    type: "SAVE_POST_ID",
    payload: {
      id,
    },
  };
};

const getPosts = () => (dispatch) => {
  dispatch(requestData());

  fetch(URL, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: "GET_POSTS",
        payload: {
          data,
        },
      })
    )
    .catch((err) => dispatch(errData(err)));
};

const getPostsByTitle = (title) => (dispatch) => {
  dispatch(requestData());

  fetch(`${URL}?title=${title}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: "GET_POSTS_BY_TITLE",
        payload: {
          data,
        },
      })
    )
    .catch((err) => dispatch(errData(err)));
};

const getPostsById = (id) => (dispatch) => {
  dispatch(requestData());

  fetch(`${URL}/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: "GET_POST_BY_ID",
        payload: {
          data,
        },
      })
    )
    .catch((err) => dispatch(errData(err)));
};

const createPost = (post) => (dispatch) => {
  dispatch(requestData());

  fetch(URL, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: "CREATE_POST",
        payload: {
          data,
        },
      })
    )
    .catch((err) => dispatch(errData(err)));
};

const updatePost = (post) => (dispatch) => {
  dispatch(requestData());

  fetch(`${URL}/${post.id}`, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: "UPDATE_POST",
        payload: {
          data,
        },
      })
    )
    .catch((err) => dispatch(errData(err)));
};

const deletePost = (id) => (dispatch) => {
  dispatch(requestData());

  fetch(`${URL}/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) =>
      dispatch({
        type: "DELETE_POST",
        payload: {
          id,
        },
      })
    )
    .catch((err) => dispatch(errData(err)));
};

export {
  getPosts,
  getPostsById,
  getPostsByTitle,
  createPost,
  updatePost,
  deletePost,
  savePostId,
};
