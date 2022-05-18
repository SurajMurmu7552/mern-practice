const GET_AUTHORS_REQUEST = "GET_AUTHORS_REQUEST";
const GET_AUTHORS_SUCCESS = "GET_AUTHORS_SUCCESS";
const GET_AUTHORS_FAILURE = "GET_AUTHORS_FAILURE";

const getAuthorsFromApi = () => async (dispatch) => {
  dispatch({
    type: GET_AUTHORS_REQUEST,
  });
  let res = await fetch("http://localhost:8000/authors");

  let data = await res.json();

  if (res.status === 200) {
    dispatch({
      type: GET_AUTHORS_SUCCESS,
      payload: {
        data,
      },
    });
  } else {
    dispatch({
      type: GET_AUTHORS_FAILURE,
      payload: {
        message: "no data recieved",
      },
    });
  }
};

const GET_USERS_REQUEST = "GET_USERS_REQUEST";
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "GET_USERS_FAILURE";

const getUsersFromApi = (id) => async (dispatch) => {
  dispatch({
    type: GET_USERS_REQUEST,
  });
  let res = await fetch(`http://localhost:8000/users/${id}`);

  let data = await res.json();

  if (res.status === 200) {
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: {
        data,
      },
    });
  } else {
    dispatch({
      type: GET_USERS_FAILURE,
      payload: {
        message: "no data recieved",
      },
    });
  }
};

export { getAuthorsFromApi, getUsersFromApi };
