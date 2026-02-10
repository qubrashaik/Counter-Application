import React from "react";
import "./Control.css";
function Control(props) {
  const { inc, dec, res } = props;
  return (
    <>
      <div>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
        <button onClick={res}>Reset</button>
      </div>
    </>
  );
}

export { Control };
