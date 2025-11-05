import { useDispatch, useSelector } from "react-redux";
import { DELETE_TODOS, EDIT_TODOS } from "../Redux/Todos/Action";

export const Todo_List = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.todo.todos);

  const handleEdits = (id) => {
    dispatch({
      type: EDIT_TODOS,
      payload: { id: id, isEdit: true },
    });
  };
  const handleDelete = (id) => {
    dispatch({ type: DELETE_TODOS, payload: id });
  };

  return (
    <>
      <h3>Todo_List</h3>
      {data.map((el) => (
        <div key={el.id}>
          {el.isEdit ? (
            <>
              <input type="text" />
            </>
          ) : (
            <>
              <p>{el.text}</p>
              <button onClick={() => handleEdits(el.id)}>Edit</button>
              <button onClick={() => handleDelete(el.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </>
  );
};
