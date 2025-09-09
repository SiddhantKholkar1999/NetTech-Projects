import React from 'react'
import { InputSection } from './InputSection'
import { OperationButtons } from './OperationButtons'

export const Calculator = (props) => {

    // const handleInc = () => {
    //     props.incFunc((prev) => prev + 1);
    // };
    // const handleDec = () => {
    //     props.incFunc((prev) => prev - 1);
    // };
    const handleOperation = (operator) => { 
        const n1 = Number(props.num1);
        const n2 = Number(props.num2);

        switch (operator) {
            case "+":
                props.setResult(n1 + n2);
                break;
            case "-":
                props.setResult(n1 - n2);
                break;
            case "*":
                props.setResult(n1 * n2);
                break;
            case "/":
                props.setResult(n2 !== 0 ? n1 / n2 : "Error");
                break;
            default:
                props.setResult(0);
        }
    };

    return (
        <>
            <h1>Calculator {props.counts}</h1>
            {/* <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button> */}
            <div>
                <InputSection
                    num1={props.num1}
                    setNum1={props.setNum1}
                    num2={props.num2}
                    setNum2={props.setNum2}
                />
                <OperationButtons
                    handleOperation={handleOperation}
                />
                <h2>Result: {props.result}</h2>
            </div>
        </>
    )
}