import { useDispatch, useSelector } from "react-redux";
import {
  COMPLETE_TODOS,
  DELETE_TODOS,
  EDIT_TODOS,
} from "../Redux/Todos/Action";
import { useState } from "react";

export const Todo_List = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo.todos);
  const [editText, setEditText] = useState("");

  const handleEdits = (id, currentText) => {
    setEditText(currentText);
    dispatch({
      type: EDIT_TODOS,
      payload: { id: id, isEdit: true },
    });
  };

  const handleDelete = (id) => {
    dispatch({ type: DELETE_TODOS, payload: id });
  };

  const handleSave = (id) => {
    if (editText.trim() === "") return;
    dispatch({ type: EDIT_TODOS, payload: { id: id, text: editText } });
    setEditText("");
  };

  const handleCancel = (id) => {
    setEditText("");
    dispatch({
      type: EDIT_TODOS,
      payload: { id: id, isEdit: false },
    });
  };

  const handleCompleted = (id) => {
    dispatch({
      type: COMPLETE_TODOS,
      payload: id,
    });
  };

  return (
    <>
      {/* <h3>Todo_List</h3> */}
      {data.map((el) => (
        <div key={el.id}>
          {el.isEdit ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button onClick={() => handleSave(el.id)}>Save</button>
              <button onClick={() => handleCancel(el.id)}>Cancel</button>
            </>
          ) : (
            <>
              <input
                type="checkbox"
                checked={el.isCompleted}
                onChange={handleCompleted(el.id)}
              />
              <p>{el.text}</p>
              <button onClick={() => handleEdits(el.id, el.text)}>Edit</button>
              <button onClick={() => handleDelete(el.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </>
  );
};
