import React from "react";

const Counter = ({ value, onIncrement, onDecrement }) => (
  <div>
    <h1>Hey its a simple counter using redux, react and codesandbox</h1>
    <h3>value: {value}</h3>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);

export default Counter;
