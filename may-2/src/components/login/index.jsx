import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { user_login } from "../../redux/actions/authActions";

import "./Login.css";

const LoginApp = (props) => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    password: "",
  });
  const handleFormSubmit = (e) => {
    e.preventDefault();

    props.handleUserLogin(state);
    console.log(state);

    navigate("/dashboard");
  };

  return (
    <form className="Login" onSubmit={handleFormSubmit}>
      <h2 className="Login-header">Login</h2>
      <div className="Login-input">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          required
          onChange={(e) => setState({ ...state, username: e.target.value })}
        />
      </div>
      <div className="Login-input">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
          onChange={(e) => setState({ ...state, password: e.target.value })}
        />
      </div>
      <div className="Login-btn">
        <input type="submit" value="Log In" />
      </div>
    </form>
  );
};

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  handleUserLogin: (data) => dispatch(user_login(data)),
});

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginApp);

export default Login;
