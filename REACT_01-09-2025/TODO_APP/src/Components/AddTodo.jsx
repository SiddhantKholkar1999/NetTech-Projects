import React from 'react'
import { ListTodo } from './ListTodo';

export const AddTodo = () => {

    const [data, setData] = React.useState([]);
    const [text, setText] = React.useState('');

    const handleFunc = () => {
        if (text.trim() === "") return;

        let todo = {
            id: Date.now(),
            text,
            isEdit: false,
            isCheck: false,
        }

        setData([...data, todo]);
    }

    return (
        <>
            {/* <div>AddTodo</div> */}
            <h1>TODO </h1>
            <input onChange={(e) => setText(e.target.value)} type='text' placeholder='Enter the todo task.....'/>
            <input onClick={handleFunc} type='button' value="add todo" />
            <ListTodo props={data}/>
        </>
    )
}
