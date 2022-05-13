const savePostId = (id) => {
  return {
    type: "SAVE_POST_ID",
    payload: {
      id,
    },
  };
};

const getPostsRequest = () => {
  return {
    type: "GET_POSTS_REQUEST",
  };
};
const getPostsSuccess = (data) => {
  return {
    type: "GET_POSTS_SUCCESS",
    payload: {
      data,
    },
  };
};
const getPostsFailure = (err) => {
  return {
    type: "GET_POSTS_FAILURE",
    payload: {
      err,
    },
  };
};

const getPostsByTitleSuccess = (data) => {
  return {
    type: "GET_POSTS_BY_TITLE_SUCCESS",
    payload: {
      data,
    },
  };
};
const getPostsByTitleRequest = () => {
  return {
    type: "GET_POSTS_BY_TITLE_REQUEST",
  };
};
const getPostsByTitleFailure = (err) => {
  return {
    type: "GET_POSTS_BY_TITLE_FAILURE",
    payload: {
      err,
    },
  };
};

const getPostsByIdSuccess = (data) => {
  return {
    type: "GET_POST_BY_ID_SUCCESS",
    payload: {
      data,
    },
  };
};
const getPostsByIdRequest = (id) => {
  return {
    type: "GET_POST_BY_ID_REQUEST",
    payload: {
      id,
    },
  };
};
const getPostsByIdFailure = (err) => {
  return {
    type: "GET_POST_BY_ID_FAILURE",
    payload: {
      err,
    },
  };
};

const createPostSuccess = (data) => {
  return {
    type: "CREATE_POST_SUCCESS",
    payload: {
      data,
    },
  };
};
const createPostRequest = (post) => {
  return {
    type: "CREATE_POST_REQUEST",
    payload: {
      post,
    },
  };
};
const createPostFailure = (err) => {
  return {
    type: "CREATE_POST_FAILURE",
    payload: {
      err,
    },
  };
};

const updatePostSuccess = (data) => {
  return {
    type: "UPDATE_POST_SUCCESS",
    payload: {
      data,
    },
  };
};
const updatePostRequest = (post) => {
  return {
    type: "UPDATE_POST_REQUEST",
    payload: {
      post,
    },
  };
};
const updatePostFailure = (err) => {
  return {
    type: "UPDATE_POST_FAILURE",
    payload: {
      err,
    },
  };
};

const deletePostSuccess = (id) => {
  return {
    type: "DELETE_POST_SUCCESS",
    payload: {
      id,
    },
  };
};

const deletePostRequest = (id) => {
  return {
    type: "DELETE_POST_REQUEST",
    payload: {
      id,
    },
  };
};

const deletePostFailure = (err) => {
  return {
    type: "DELETE_POST_FAILURE",
    payload: {
      err,
    },
  };
};

export {
  savePostId,
  getPostsSuccess,
  getPostsRequest,
  getPostsFailure,
  getPostsByIdSuccess,
  getPostsByIdRequest,
  getPostsByIdFailure,
  getPostsByTitleSuccess,
  getPostsByTitleRequest,
  getPostsByTitleFailure,
  createPostSuccess,
  createPostRequest,
  createPostFailure,
  updatePostSuccess,
  updatePostRequest,
  updatePostFailure,
  deletePostSuccess,
  deletePostRequest,
  deletePostFailure,
};
