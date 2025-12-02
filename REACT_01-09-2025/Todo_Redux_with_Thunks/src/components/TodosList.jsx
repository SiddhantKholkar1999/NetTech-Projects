/* eslint-disable no-unused-vars */
import { useEffect, useRef } from "react";
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

  // // For edit mode
  // const [editId, setEditId] = useState(null);
  // const [editText, setEditText] = useState("");
  const editText = useRef(null);

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
  const handleEdit = (id) => {
    // if (!todo.isEdits) return;
    // setEditId(todo.id);
    // setEditText(todo.text);

    console.log("Edit Function Called");

    dispatch(editTodoRequest());

    // const updatedTodo = todos.map((el) =>
    //   el.id === id ? { ...el, text: editText, isEdits: !el.isEdits } : el
    // );
    const updatedTodo = todos
      // .map((el) => (el.id === id ? { ...el, isEdits: !el.isEdits } : null))
      .map((el) => (el.id === id ? { ...el, isEdits: true } : null))
      .filter((el) => el != null);
    console.log("data", updatedTodo);

    axios
      .patch(`${API}/${id}`, ...updatedTodo)
      .then((res) => dispatch(editTodoSuccess([id, res.data])))
      .catch((err) => dispatch(editTodoFailure(err)));

    // setEditId(id);
    // setEditText(editText);
  };

  // Save Edited Todo
  const handleSave = (id) => {
    const updatedTodo = todos.map((el) =>
      el.id === id
        ? // ? { ...el, text: editText.current.value, isEdits: !el.isEdits }
          { ...el, text: editText.current.value, isEdits: false }
        : el
    );
    console.log("🚀 ~ updatedTodo:", updatedTodo);

    // dispatch(editTodoSuccess({ ...todo, title: editText }));
    dispatch(editTodoRequest());
    axios
      // .patch(`${API}`, updatedTodo)
      .patch(`${API}/${id}`, ...updatedTodo)
      .then((res) => dispatch(editTodoSuccess(res.data)))
      .catch((err) => dispatch(editTodoFailure(err)));
    // setEditId(null);
  };

  // Cancel Edited Todo
  const handleCancel = (id) => {
    const updatedTodo = todos.map((el) =>
      // el.id === id ? { ...el, isEdits: !el.isEdits } : el
      el.id === id ? { ...el, isEdits: false } : el
    );
    console.log("🚀 ~ updatedTodo:", updatedTodo);
    // dispatch(editTodoSuccess({ ...todo, title: editText }));
    dispatch(editTodoRequest());
    axios
      // .patch(`${API}`, updatedTodo)
      .patch(`${API}/${id}`, ...updatedTodo)
      .then((res) => dispatch(editTodoSuccess(res.data)))
      .catch((err) => dispatch(editTodoFailure(err)));
    // setEditId(null);
  };

  // // Toggle Completion
  // const handleToggle = (id) => {
  //   // dispatch(completeTodoSuccess(id));
  //   dispatch(completeTodoRequest());
  //   const found = todos.find((t) => t.id === id);
  //   const updated = { ...found, completed: !found.completed };

  //   axios
  //     .patch(`${API}/${id}`, updated)
  //     .then(() => dispatch(completeTodoSuccess(id)))
  //     .catch((err) => dispatch(completeTodoFailure(err)));
  // };

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
            todos.map((el) => {
              console.log("🚀 ~ el:", el);
              return (
                <li
                  key={el.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "10px",
                  }}
                >
                  {/* {editId === el.id ? ( */}
                  {el.isEdits ? (
                    <>
                      <input
                        ref={editText}
                        title={el.text}
                        // value={el.text}
                        // onChange={(e) => setEditText(e.target.value)}
                      />
                      <button onClick={() => handleSave(el.id)}>Save</button>
                      <button onClick={() => handleCancel(el.id)}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      {/* <span
                      onClick={() => handleToggle(el.id)}
                      style={{
                        textDecoration: el.completed ? "line-through" : "none",
                        cursor: "pointer",
                        flexGrow: 1,
                      }}
                    >
                      {el.text}
                    </span> */}
                      {el.text}
                      <button onClick={() => handleEdit(el.id)}>Edit</button>
                      <button onClick={() => handleDelete(el.id)}>
                        Delete
                      </button>
                      {/* <button onClick={() => handleToggle(el.id)}>
                      {el.completed ? "Undo" : "Complete"}
                    </button> */}
                    </>
                  )}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
