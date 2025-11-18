import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getRequestTodo,
  getSuccessTodo,
  getFailureTodo,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoFailure,
  editTodoRequest,
  editTodoSuccess,
  editTodoFailure,
  completeTodoRequest,
  completeTodoSuccess,
  completeTodoFailure,
} from "../Redux/todos/Action";

import axios from "axios";

const API = import.meta.env.VITE_API_RAMU_KAKA;

export const TodosList = () => {
  const { todos, isLoading, isError } = useSelector((state) => state.todo);
  console.log("🚀 ~ todos:", todos);
  const dispatch = useDispatch();

  // For edit mode
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  // Delete Todo
  const handleDelete = (id) => {
    // dispatch(deleteTodoSuccess(id));
    dispatch(deleteTodoRequest());
    axios
      .delete(`${API}/${id}`)
      .then(() => dispatch(deleteTodoSuccess(id)))
      .catch((err) => dispatch(deleteTodoFailure(err)));
  };

  // Start Edit Mode
  const handleEdit = (todo) => {
    console.log("🚀 ~ todo:", todo);
    // if (!todo.isEdits) return;
    // setEditId(todo.id);
    // setEditText(todo.text);

    if (!todo.isEdits) {
      const updatedTodo = { ...todo, isEdits: true };

      dispatch(editTodoRequest());
      axios
        .patch(`${API}/${todo.id}`, updatedTodo)
        .then((res) => dispatch(editTodoSuccess(res.data)))
        .catch((err) => dispatch(editTodoFailure(err)));

      setEditId(todo.id);
      setEditText(todo.text);
      return;
    }

    setEditId(todo.id);
    setEditText(todo.text);
  };

  // Save Edited Todo
  const handleSave = (todo) => {
    const updatedTodo = { ...todo, text: editText };
    // dispatch(editTodoSuccess({ ...todo, title: editText }));
    dispatch(editTodoRequest());
    axios
      .patch(`${API}/${todo.id}`, updatedTodo)
      .then((res) => dispatch(editTodoSuccess(res.data)))
      .catch((err) => dispatch(editTodoFailure(err)));
    setEditId(null);
  };

  // Toggle Completion
  const handleToggle = (id) => {
    // dispatch(completeTodoSuccess(id));
    dispatch(completeTodoRequest());
    const found = todos.find((t) => t.id === id);
    const updated = { ...found, completed: !found.completed };

    axios
      .patch(`${API}/${id}`, updated)
      .then(() => dispatch(completeTodoSuccess(id)))
      .catch((err) => dispatch(completeTodoFailure(err)));
  };

  const getApiCall = () => {
    console.log("Hello");
    dispatch(getRequestTodo());
    axios
      .get(API)
      .then((res) => dispatch(getSuccessTodo(res.data)))
      .catch((err) => dispatch(getFailureTodo(err)));
  };

  useEffect(() => {
    console.log("I am INVOKED");
    getApiCall(); //Here function is called but not invoked through brackets "()" in ES6+ JavaScript and also Function name is used Inside Callback Function else will do rendering due to closure feature.
  }, []);

  // if (value.isLoading) {
  //   return <h5>loading...</h5>;
  // }

  // UI rendering
  if (isLoading) return <p>Loading todos...</p>;
  // if (isError) return <p style={{ color: "red" }}>Error: {isError}</p>;
  if (isError) return <p style={{ color: "red" }}>Something Went Wrong</p>;
  if (!todos.length) return <p>No todos found. Add one above!</p>;

  return (
    <>
      {/* <h1>TodosList</h1>
      <div>
        {todos.map((el) => (
          <div key={el.id}>{el.text}</div>
        ))}
      </div> */}
      <div style={{ marginTop: "20px" }}>
        {/* <h2>Todo List</h2> */}
        <ul style={{ listStyle: "none", padding: 0 }}>
          {todos.length > 0 &&
            todos.map((todo) => (
              <li
                key={todo.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                {editId === todo.id ? (
                  <>
                    <input
                      // value={editText}
                      value={todo.text}
                      onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={() => handleSave(todo)}>Save</button>
                    <button onClick={() => setEditId(null)}>Cancel</button>
                  </>
                ) : (
                  <>
                    <span
                      onClick={() => handleToggle(todo.id)}
                      style={{
                        textDecoration: todo.completed
                          ? "line-through"
                          : "none",
                        cursor: "pointer",
                        flexGrow: 1,
                      }}
                    >
                      {todo.text}
                    </span>
                    <button onClick={() => handleEdit(todo)}>Edit</button>
                    <button onClick={() => handleDelete(todo.id)}>
                      Delete
                    </button>
                    <button onClick={() => handleToggle(todo.id)}>
                      {todo.completed ? "Undo" : "Complete"}
                    </button>
                  </>
                )}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
