import React from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/slices/basketSlice";
import Item from "../Item";

import "./Groceries.css";

export default function Groceries({ groceries }) {
  const dispatch = useDispatch();

  const addItemToBasket = (data) => {
    dispatch(addToBasket(data));
  };

  return (
    <div className="Groceries">
      {groceries.map((element) => (
        <Item element={element} onClick={addItemToBasket} />
      ))}
    </div>
  );
}
