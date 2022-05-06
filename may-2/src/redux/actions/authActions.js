const user_login = (data) => {
  return {
    type: "USER_LOGIN",
    payload: data,
  };
};

export { user_login };
