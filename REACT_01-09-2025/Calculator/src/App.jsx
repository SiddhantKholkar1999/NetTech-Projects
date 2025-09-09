import React from 'react';
import './App.css';

import { Calculator } from './components/Calculator';
import { InputSection } from './components/InputSection';
import { OperationButtons } from './components/OperationButtons';

function App() {

  let [num1, setNum1] = React.useState(0);
  let [num2, setNum2] = React.useState(0);
  let [result, setResult] = React.useState(0);

  return (
    <>
      <div style={{textAlign:"center"}}>
        {/* <h1>CALCULATOR (from App.jsx)</h1> */}
        <Calculator
          num1={num1} setNum1={setNum1}
          num2={num2} setNum2={setNum2}
          result={result} setResult={setResult} 
        />
      </div>
    </>
  )
}

export default App
