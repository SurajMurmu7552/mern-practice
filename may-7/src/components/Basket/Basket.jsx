import React from "react";
import { useDispatch } from "react-redux";
import { purchasedFromBasket } from "../../redux/slices/basketSlice";
import Item from "../Item";

import "./Basket.css";

export default function Basket({ basket }) {
  const dispatch = useDispatch();

  const defautlValue = {
    item: "Add items from the groceries to display",
  };

  const addItemToPurchased = (data) => {
    dispatch(purchasedFromBasket(data));
  };
  console.log(basket);
  return (
    <div className="Basket">
      {basket.length > 0 ? (
        basket.map((element) => (
          <Item element={element} change={true} onClick={addItemToPurchased} />
        ))
      ) : (
        <Item change={true} element={defautlValue} />
      )}
    </div>
  );
}
