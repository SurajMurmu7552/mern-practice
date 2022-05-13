const initialState = {
  posts: [
    {
      id: "dfsfw",
      title: "Obi-wan kenobi",
      body: "Hello there",
    },
  ],
  isLoading: false,
  errObj: {},
  post_id: "",
  post: {},
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SAVE_POST_ID": {
      return {
        ...state,
        post_id: payload.id,
      };
    }

    case "GET_POSTS_REQUEST": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "GET_POSTS_SUCCESS": {
      return {
        ...state,
        posts: payload.data,
        isLoading: false,
      };
    }

    case "GET_POSTS_FAILURE": {
      return {
        ...state,
        errObj: payload.err,
        isLoading: false,
      };
    }

    case "GET_POSTS_BY_TITLE_REQUEST": {
      return {
        ...state,
        isLoading: true,
      };
    }
    case "GET_POSTS_BY_TITLE_SUCCESS": {
      return {
        ...state,
        posts: payload.data,
        isLoading: false,
      };
    }

    case "GET_POSTS_BY_TITLE_FAILURE": {
      return {
        ...state,
        errObj: payload.err,
        isLoading: false,
      };
    }

    case "GET_POST_BY_ID_REQUEST": {
      return {
        ...state,
        isLoading: true,
      };
    }

    case "GET_POST_BY_ID_SUCCESS": {
      return {
        ...state,
        post: payload.data,
        isLoading: false,
      };
    }

    case "GET_POST_BY_ID_FAILURE": {
      return {
        ...state,
        errObj: payload.err,
        isLoading: false,
      };
    }

    case "CREATE_POST_REQUEST": {
      return {
        ...state,
        isLoading: true,
      };
    }

    case "CREATE_POST_SUCCESS": {
      return {
        ...state,
        posts: [...state.posts, payload.data],
        isLoading: false,
      };
    }

    case "CREATE_POST_FAILURE": {
      return {
        ...state,
        isLoading: false,
        errObj: payload.err,
      };
    }

    case "UPDATE_POST_REQUEST": {
      return {
        ...state,
        isLoading: true,
      };
    }

    case "UPDATE_POST_SUCCESS": {
      let posts = state.posts.map((el) => {
        if (el.id === payload.data.id) {
          return payload.data;
        } else return el;
      });

      return {
        ...state,
        posts,
        isLoading: false,
      };
    }

    case "UPDATE_POST_FAILURE": {
      return {
        ...state,
        errObj: payload.err,
        isLoading: false,
      };
    }

    case "DELETE_POST_REQUEST": {
      return {
        ...state,
        isLoading: true,
      };
    }

    case "DELETE_POST_SUCCESS": {
      let posts = state.posts.filter((el) => el.id !== payload.id);

      return {
        ...state,
        posts,
        isLoading: false,
      };
    }

    case "DELETE_POST_FAILURE": {
      return {
        ...state,
        errObj: payload.err,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default rootReducer;
