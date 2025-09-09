import React from 'react'

// export const Child = ({counts}) => {
    
//     console.log(counts);

//     return (
//         <>
//             <h1>Child {counts}</h1>
//         </>
//     )
// }

export const Child = (props) => {
    
    console.log(props);
    console.log(props.counts);

    const handleInc = () => {
        props.incFunc((prev) => prev + 1);
    }
    const handleDec = () => {
        props.incFunc((prev) => prev - 1);
    }

    return (
        <>
            <h1>Child {props.counts}</h1>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
        </>
    )
}