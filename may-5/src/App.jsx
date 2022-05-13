import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import DisplayPost from "./components/DisplayPost/DisplayPost";

function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/post">Post</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/post" element={<DisplayPost />} />
      </Routes>
    </div>
  );
}

export default App;
