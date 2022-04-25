import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <nav className="nav">
        <ul className="nav-items">
          <li className="nav-item">
            <Link to="/users">Users</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
