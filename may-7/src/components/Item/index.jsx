import React from "react";

import "./Item.css";

export default function Item({ element, change, onClick }) {
  return (
    <div className="Item" onClick={() => onClick(element)}>
      <div className="Item-btn">
        <div
          className="icon"
          style={
            change ? { backgroundColor: "red" } : { backgroundColor: "green" }
          }
        >
          <div></div>
          {change ? null : <div></div>}
        </div>
      </div>
      <div
        className="Item-content"
        style={
          element.pending === false && change
            ? { textDecoration: "line-through" }
            : {}
        }
      >
        {element.count} {element.item}
      </div>
    </div>
  );
}
