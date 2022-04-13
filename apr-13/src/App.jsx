import "./App.css";
import Employee from "./components/exercise1/Employee";
import ProductList from "./components/exercise2/ProductList";
import UserList from "./components/exercise2/UserList";
import Counter from "./components/exercise3/Counter";

function App() {
  return (
    <div className="App">
      <div className="exercise1">
        <h2>Exercise 1</h2>
        <Employee />
      </div>
      --------------------------------------------------
      <div className="exercise2">
        <h2>Exercise 2</h2>
        <ProductList />
        <UserList />
      </div>
      --------------------------------------------------
      <div className="exercise3">
        <h2>Exercise 3</h2>
        <Counter />
      </div>
    </div>
  );
}

export default App;
