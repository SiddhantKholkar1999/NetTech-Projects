import React from 'react'
import { ListTodo } from './ListTodo';

export const AddTodo = () => {

    const [data, setData] = React.useState([]);
    const [text, setText] = React.useState('');
    const inputData = React.useRef(null);

    //By UseState
    const handleFuncByUseState = () => {
        if (text.trim() === "") return;

        let todo = {
            id: Date.now(),
            text,
            isEdit: false,
            isCheck: false,
        };

        setData([...data, todo]);
    }

    //By UseRef
    const handleFuncByUseRef = () => {
        if (inputData.current.value.trim() === "") return;

        let todo = {
            id: Date.now(),
            todo: inputData.current.value,
            isEdit: false,
            isComplete: false,
        };

        sessionStorage.setItem("todos", JSON.stringify(todo));
    }

    return (
        <>
            {/* <div>AddTodo</div> */}
            <h1>TODO By UseState</h1>
            <input onChange={(e) => setText(e.target.value)} type='text' placeholder='Enter the todo task.....'/>
            <input onClick={handleFuncByUseState} type='button' value="add todo" />
            <h1>TODO By UseRef</h1>
            <input type='text' placeholder='enter the todo....' ref={inputData} />
            <button onClick={handleFuncByUseRef}>add</button>
            <ListTodo props={data}/>
        </>
    )
}
