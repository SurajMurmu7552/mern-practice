import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import Pending from "./components/Pending/Pending";
import Purchased from "./components/Purchased/Purchased";

function App() {
  return (
    <div className="App">
      <div className="App-search"></div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/pending" element={<Pending />} />
        <Route path="/purchased" element={<Purchased />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <nav className="App-nav">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/pending">pending</NavLink>
          </li>
          <li>
            <NavLink to="/purchased">purchased</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
