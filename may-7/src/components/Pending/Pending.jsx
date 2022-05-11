import React from "react";
import { useSelector } from "react-redux";
import Basket from "../Basket/Basket";
import Groceries from "../Groceries/Groceries";

export default function Pending() {
  const { groceries, basket } = useSelector((state) => state.basket);

  const pendingBasket = basket.filter((el) => el.pending === true);

  return (
    <div className="Dashboard">
      <div className="App-container">
        <Groceries groceries={groceries} />
      </div>
      <div className="App-container">
        <Basket basket={pendingBasket} />
      </div>
    </div>
  );
}
