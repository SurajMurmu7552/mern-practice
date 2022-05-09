import React from "react";
import { useSelector } from "react-redux";
import Item from "../Item";

import "./Groceries.css";

export default function Groceries() {
  const groceries = useSelector((state) => state.basket.groceries);
  console.log(groceries);
  return (
    <div className="Groceries">
      {groceries.map((element) => (
        <Item element={element} />
      ))}
    </div>
  );
}
