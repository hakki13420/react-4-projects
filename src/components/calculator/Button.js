import React from 'react'
import './button.css'

export default function Button({value, handlClick}) {
  
  return (
    <div
      className={
        value === "Clear" ? "reset button-container" : "button-container"
      }
    >
      <button
        className={
          value === "+" || value === "-" || value === "*" || value === "/"
            ? "operand"
            : "other"
        }
        onClick={()=>handlClick(value)}
      >
        {value}
      </button>
    </div>
  );
}
