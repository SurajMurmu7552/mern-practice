import React from "react";
import { useSelector } from "react-redux";
import Basket from "../Basket/Basket";
import Groceries from "../Groceries/Groceries";

import "./Dashboard.css";

export default function Dashboard() {
  const { groceries, basket } = useSelector((state) => state.basket);

  return (
    <div className="Dashboard">
      <div className="App-container">
        <Groceries groceries={groceries} />
      </div>
      <div className="App-container">
        <Basket basket={basket} />
      </div>
    </div>
  );
}
