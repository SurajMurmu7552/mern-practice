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

    case "REQUEST": {
      return {
        ...state,
        isLoading: true,
      };
    }

    // case "SUCCESS": {
    //   return {
    //     ...state,
    //     isLoading: false,
    //   };
    // }

    case "ERROR": {
      return {
        ...state,
        errObj: payload.err,
      };
    }
    case "GET_POSTS": {
      return {
        ...state,
        posts: payload.data,
        isLoading: false,
      };
    }

    case "GET_POSTS_BY_TITLE": {
      return {
        ...state,
        posts: payload.data,
        isLoading: false,
      };
    }

    case "GET_POST_BY_ID": {
      return {
        ...state,
        post: payload.data,
        isLoading: false,
      };
    }

    case "CREATE_POST": {
      return {
        ...state,
        posts: [...state.posts, payload.data],
        isLoading: false,
      };
    }

    case "UPDATE_POST": {
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

    case "DELETE_POST": {
      let posts = state.posts.filter((el) => el.id !== payload.id);

      return {
        ...state,
        posts,
        isLoading: false,
      };
    }

    default: {
      return state;
    }
  }
};

export default rootReducer;
