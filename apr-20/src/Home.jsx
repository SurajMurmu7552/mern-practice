import React, { Component } from "react";
import { Link, Route, Routes } from "react-router-dom";

// components
import Users from "./components/Users";
import About from "./components/About";
import Contact from "./components/Contact";

//import styles
import "./App.css";
import ProfilePic from "./components/ProfilePic";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <nav className="nav">
          <ul className="link-items">
            <li className="link-item">
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div className="display-container">
          <Routes>
            <Route path="/users" element={<Users />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profilepic/:id" element={<ProfilePic />} />
          </Routes>
        </div>
      </div>
    );
  }
}
