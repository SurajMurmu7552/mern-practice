const initialState = {
  name: "",
  isAuth: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  console.log(type);
  switch (type) {
    case "USER_LOGIN": {
      console.log("USER_LOGIN");
      if (payload.username === "suraj" && payload.password === "123") {
        return {
          ...state,
          name: payload.username,
          isAuth: true,
        };
      }

      break;
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
