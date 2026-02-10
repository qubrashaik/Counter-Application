import React from "react";

function Display(props) {
  const { cou } = props;
  return (
    <div>
      <h1>Count : {cou}</h1>
    </div>
  );
}

export { Display };
