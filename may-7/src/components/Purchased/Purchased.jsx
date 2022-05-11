import React from "react";
import { useSelector } from "react-redux";
import Basket from "../Basket/Basket";
import Groceries from "../Groceries/Groceries";

export default function Purchased() {
  const { groceries, basket } = useSelector((state) => state.basket);

  const purchasedBasket = basket.filter((el) => el.pending === false);

  return (
    <div className="Dashboard">
      <div className="App-container">
        <Groceries groceries={groceries} />
      </div>
      <div className="App-container">
        <Basket basket={purchasedBasket} />
      </div>
    </div>
  );
}
