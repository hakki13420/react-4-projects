import React from 'react'
import "../styles/counter.css"

export default function Counter() {
  const [count,setCount] = React.useState(0)
  const increase = () => {
    setCount(count+1)
  }
  const decrease = () => {
    setCount(count - 1);
  }
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="counter-container">
      <div className="counter">
        {count}
      </div>
      <div className="buttons">
        <button onClick={increase}>Incriment</button>
        <button onClick={decrease}>decriment</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}
