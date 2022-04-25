import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Stuff from "./components/Stuff";

function App() {
  let handleStyle = () => {};

  return (
    <div className="App">
      <h1 className="App-heading">Simple SPA</h1>
      <nav className="App-nav">
        <ul className="nav-items">
          <li className="nav-item" id="home-link" onClick={handleStyle}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-item" id="home-link" onClick={handleStyle}>
            <NavLink to="/stuff">Stuff</NavLink>
          </li>
          <li className="nav-item" onClick={handleStyle}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stuff" element={<Stuff />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
