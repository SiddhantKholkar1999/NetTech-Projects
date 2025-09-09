import React from 'react'

export const InputSection = ({ num1, setNum1, num2, setNum2 }) => {
    return (
        <>
            {/* <div>InputSection</div> */}
            <div>
                <input type='number' value={num1} placeholder='Enter Number 1' onChange={(e) => setNum1(e.target.value)}/><br/>
                <input type='number' value={num2} placeholder='Enter Number 2' onChange={(e) => setNum2(e.target.value)}/>
            </div>
        </>
    )
}
