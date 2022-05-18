const initialState = {
  authors: [],
  user: {},
  err: "",
  isLoading: false,
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_AUTHORS_REQUEST": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "GET_AUTHORS_SUCCESS": {
      return {
        ...state,
        isLoading: false,
        authors: payload.data,
      };
    }
    case "GET_AUTHORS_FAILURE": {
      return {
        ...state,
        isLoading: false,
        err: payload.message,
      };
    }
    case "GET_USERS_REQUEST": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "GET_USERS_SUCCESS": {
      return {
        ...state,
        isLoading: false,
        user: payload.data,
      };
    }
    case "GET_USERS_FAILURE": {
      return {
        ...state,
        isLoading: false,
        err: payload.message,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default rootReducer;
