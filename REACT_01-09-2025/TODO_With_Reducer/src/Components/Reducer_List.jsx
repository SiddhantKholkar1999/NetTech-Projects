import React from "react";
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  UPDATE_TEXT_TEMP_TODO,
  SAVE_EDIT_TODO,
  CANCEL_EDIT_TODO,
} from "../Reducer/Action";

export const Reducer_List = ({ state, dispatch }) => {
  return (
    <>
      <h1>Reducer_List</h1>
      <div>
        {state.length === 0 ? (
          <>
            <p>No Todos Available</p>
          </>
        ) : (
          state.map((el) => (
            <div key={el.id}>
              {el.isEdit ? (
                <>
                  <input
                    type="text"
                    defaultValue={el.todoText}
                    onBlur={(e) =>
                      dispatch({
                        type: UPDATE_TEXT_TEMP_TODO,
                        payload: { id: el.id, text: e.target.value },
                      })
                    }
                  />
                  <button
                    onClick={() =>
                      dispatch({
                        type: SAVE_EDIT_TODO,
                        payload: { id: el.id },
                      })
                    }
                  >
                    Save
                  </button>
                  <button
                    onClick={() =>
                      dispatch({
                        type: CANCEL_EDIT_TODO,
                        payload: { id: el.id },
                      })
                    }
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <span>{el.todoText}</span>
                  <button
                    onClick={() =>
                      dispatch({
                        type: EDIT_TODO,
                        payload: { id: el.id },
                      })
                    }
                  >
                    Edit
                  </button>
                  <button
                    onClick={() =>
                      dispatch({ type: DELETE_TODO, payload: el.id })
                    }
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
};
