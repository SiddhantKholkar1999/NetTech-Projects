import React from 'react';

export const UseRef = () => {
    // const [textVal, setTextVal] = React.useState("");
    // let [count, setCount] = React.useState(0);

    // const handleChange = (value) => {
    //     setCount((prev) => prev + 1);
    //     console.log(value, count);
    // }

    const refData = React.useRef(null);

    const handleClick = () => {
        let value = refData.current.value;
        console.log('Value : ',value," ==> User Value Taken");
    }

    return (
        <>
            <h1>UseRef Hook's</h1>
            {/* <input type="text" onChange={(e) => handleChange(e.target.value)} /> */}
            <input type="text" ref={refData} />
            <button onClick={handleClick}>CLICK ME</button>
        </>
    );
}