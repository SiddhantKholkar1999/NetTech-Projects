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
      <h1>CALCULATOR</h1>
      <Calculator counts={num1} incFunc={setNum1} />
      <Calculator counts={num2} incFunc={setNum2} />
      <Calculator counts={result} incFunc={setResult} />
      <InputSection />
      <OperationButtons/>
    </>
  )
}

export default App
