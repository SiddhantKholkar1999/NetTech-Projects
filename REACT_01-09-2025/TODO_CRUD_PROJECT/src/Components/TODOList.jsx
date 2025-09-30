import { useRef } from "react";

export const TODOList = ({ todos, setTodos, edit, setEdit }) => {
  const editRef = useRef();

  const toggleTodo = (id) => {
    setTodos(
      todos.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      )
    );
    console.log(todos);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
    console.log(todos);
  };

  const saveEdit = () => {
    const text = editRef.current.value.trim();
    if (!text) return;
    setTodos(
      todos.map((task) => (task.id === edit ? { ...task, text } : task))
    );
    setEdit(null);
    console.log(todos);
  };

  return (
    <>
      {/* <div>TODOList</div> */}
      <div>
        {todos.map((task) => (
          <div key={task.id}>
            {edit === task.id ? (
              <>
                <input ref={editRef} />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                <span
                  //   onClick={() => toggleTodo(task.id)}
                  style={{ textDecoration: task.isDone ? "line-through" : "" }}
                >
                  {task.text}
                </span>
                <br></br>
                <br></br>
                <button onClick={() => toggleTodo(task.id)}>
                  {task.isDone ? "UNFINISH" : "FINISH"}
                </button>
                <button onClick={() => setEdit(task.id)}>EDIT</button>
                <button onClick={() => deleteTodo(task.id)}>DELETE</button>
              </>
            )}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        ))}
      </div>
    </>
  );
};
