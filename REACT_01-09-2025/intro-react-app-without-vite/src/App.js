import React from 'react';
import './App.css';

import { UseRef } from './Components/useRef.jsx';

function App() {
  // let count = 0;
  let [count, setCount] = React.useState(0);

  const handleIncre = () => {
    // count += 1;
    // console.log(count);
    // document.getElementById('counter').textContent = `Counter ${count}`;
    setCount((prev) => prev + 1);
  }
  const handleDecre = () => {
    // count -= 1;
    // console.log(count);
    // document.getElementById('counter').textContent = `Counter ${count}`;
    setCount((prev) => prev - 1);
  }


  return (
    <>
      <h1 id='counter'>Counter {count}</h1>
      <button disabled={count===10} onClick={handleIncre}>+</button>
      <button disabled={count <= 0} onClick={handleDecre}>-</button>
      <UseRef/>
    </>
  );
}

export default App;
