import React from 'react'

export const Calculator = (props) => {

    // const handleInc = () => {
    //     props.incFunc((prev) => prev + 1);
    // };
    // const handleDec = () => {
    //     props.incFunc((prev) => prev - 1);
    // };
    // const handleOperation = (operator) => { 
    //     const res = calculate(num1, num2, operator);
    //     setResult(res);
    // };

    return (
        <>
            <h1>Calculator {props.counts}</h1>
            {/* <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button> */}
        </>
    )
}