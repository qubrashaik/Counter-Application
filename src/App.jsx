import { useState } from "react";
import "./App.css";
import { Display } from "./Components/Displays/Display";
import { Control } from "./Components/Controls/Control";
function App() {
  const [count, setcount] = useState(0);

  const increase = () => {
    setcount(count + 1);
  };

  const decrease = () => {
    setcount(count - 1);
  };

  const reset = () => {
    setcount(0);
  };
  return (
    <>
      <div className="box">
        
        <Display cou={count} />
        <div>
          <Control inc={increase} dec={decrease} res={reset} />
        </div>
      </div>
    </>
  );
}

export default App;
