import React from 'react'

export const InputSection = ({num1, num2}) => {
    return (
        <>
            <div>InputSection</div>
            <div>
                <input type='number' value={num1}/><br/>
                <input type='number' value={num2}/>
            </div>
        </>
    )
}
