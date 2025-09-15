import React from 'react'

export const ListTodo = ({props}) => {
    console.log(props);
    
    // const handleDeleteFunc = (id,text) => {
    //     console.log("ID : ",id);
    //     console.log("Text : ",text);
    // }

    return (
        <>
            {/* <div>ListTodo</div> */}
            <h1>ListTodo</h1>
            {
                props.map((el) => (
                    <div key={el.id}>
                        <p>{el.text}</p>
                        <button>edit</button>
                        {/* <button onClick={handleDeleteFunc(el.id,el.text)}>del</button> */}
                        <button onClick={() => {
                            console.log("ID : ",el.id);
                            console.log("Text : ", el.text);
                            delete el.id, el.text;
                        }}>del</button>
                    </div>
                ))
            }
        </>
    )
}
