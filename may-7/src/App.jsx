import "./App.css";
import Basket from "./components/Basket";
import Groceries from "./components/Groceries";

function App() {
  return (
    <div className="App">
      <div className="App-search"></div>
      <div className="App-container">
        <Groceries />
      </div>
      <div className="App-container">
        <Basket />
      </div>
    </div>
  );
}

export default App;
