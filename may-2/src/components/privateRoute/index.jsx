import React from "react";
import { connect } from "react-redux";

import { Navigate } from "react-router-dom";

const PrivateRouteApp = ({ isAuth, children }) => {
  return isAuth ? children : <Navigate to="/login" />;
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

const PrivateRoute = connect(mapStateToProps)(PrivateRouteApp);

export default PrivateRoute;
