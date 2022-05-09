import React from "react";

import "./Item.css";

export default function Item({ element }) {
  return (
    <div className="Item">
      <div className="Item-btn">
        <div className="icon">
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="Item-content">{element.item}</div>
    </div>
  );
}
