import { useState } from "react";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  // let counter = 15;

  const addCount = () => {
    setCounter(counter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
  };

  const removeCount = () => {
    setCounter(counter - 1);
    // setCounter((prevCounter) => {
    //   return prevCounter - 1;
    // });
    // setCounter((prevCounter) => {
    //   return prevCounter - 1;
    // });
    // setCounter((prevCounter) => {
    //   return prevCounter - 1;
    // });
    // setCounter((prevCounter) => {
    //   return prevCounter - 1;
    // });
  };

  return (
    <>
      <h1>React course with dana</h1>
      <h2>Counter value:{counter}</h2>
      <button onClick={addCount}>Add Value</button>{" "}
      <button onClick={removeCount}>remove value</button>
      <p>footer:{counter}</p>
    </>
  );
}

export default App;
