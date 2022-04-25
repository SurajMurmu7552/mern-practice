import React, { createRef } from "react";
import "./Accordion.css";

export default function Accordion(props) {
  const bottomRef = createRef();

  const handleToggle = (e) => {
    console.log(e.target.classList);
    e.target.classList.toggle("active-btn");
    bottomRef.current.classList.toggle("active-btn");
    // bottomRef.current.style.height = "0";
  };

  return (
    <div className="Acc">
      <div className="Acc-top">
        <h4 className="Acc-heading">Accordian heading</h4>
        <button className="Acc-btn" onClick={handleToggle}>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className="Acc-bottom" ref={bottomRef}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          deserunt nulla est quaerat aspernatur tenetur et, accusamus veniam
          velit accusantium.
        </p>
      </div>
    </div>
  );
}
