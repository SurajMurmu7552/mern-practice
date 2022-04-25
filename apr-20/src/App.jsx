import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

// components
import Users from "./components/Users";
import About from "./components/About";
import Contact from "./components/Contact";

//import styles
import "./App.css";
import ProfilePic from "./components/ProfilePic";
import Home from "./components/Home";

export default class App extends Component {
  render() {
    return (
      <div className="home">
        <div className="display-container">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="/users" element={<Users />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/profilepic/:id" element={<ProfilePic />} />
            </Route>
          </Routes>
        </div>
      </div>
    );
  }
}
