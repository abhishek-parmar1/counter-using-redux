import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

// import the componenets here
import Counter from "./components/counter/counter";

// import the reducers here
import { counter } from "./reducers";

// import the styles here
import "./styles.css";

// store configuartion
const store = createStore(counter);

// geting the div with id root
const rootElement = document.getElementById("root");

// render the app when state changes
const render = () => {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: "INCREMENT" })}
      onDecrement={() => store.dispatch({ type: "DECREMENT" })}
    />,
    rootElement
  );
};

// call the render when any action dispatched
store.subscribe(render);

render();
