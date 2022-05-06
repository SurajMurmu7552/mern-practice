import "./App.css";

import React, { Component } from "react";
import Calculator from "./components/calculator/calcBody/Calculator";
import { NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import NotFound from "./components/notFound";
import PrivateRoute from "./components/privateRoute";

class App extends Component {
  render() {
    return (
      <div className="App App-header">
        <nav className="App-nav">
          <ul className="nav-items">
            <li className="nav-item">
              <NavLink to="/">Calculator</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </nav>
        <div className="App-container">
          <Routes>
            <Route path="/" element={<Calculator />} />
            {/* <Route
              path="/dashboard"
              element={
                this.props.isAuth ? <Dashboard /> : <Navigate to="/login" />
              }
            /> */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   isAuth: state.auth.isAuth,
// });

// const App = connect(mapStateToProps)(AppComponent);

export default App;
