import React from 'react'

export const OperationButtons = ({handleOperation}) => {
    return (
        <>
            {/* <div>OperationButtons</div> */}
            <div>
                <button onClick={() => handleOperation("+")}>+</button>
                <button onClick={() => handleOperation("-")}>-</button>
                <button onClick={() => handleOperation("*")}>X</button>
                <button onClick={() => handleOperation("/")}>/</button>
            </div>
        </>
    )
}
