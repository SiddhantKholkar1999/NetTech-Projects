import { useRef } from "react";
import { useDispatch } from "react-redux";

import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
} from "../Redux/todos/Action";
import axios from "axios";
import { TodosList } from "./TodosList";

const API = import.meta.env.VITE_API_RAMU_KAKA;

export const TodosAdd = () => {
  // const value = useSelector((state) => state.todo);
  // console.log("🚀 ~ value:", value);

  const elementData = useRef(null);
  const dispatch = useDispatch();

  const handleInputVal = () => {
    const values = elementData.current.value;

    const obj = {
      id: Date.now(),
      text: values,
      isEdits: false,
      isCompleted: false,
    };

    dispatch(addTodoRequest());
    axios
      .post(API, obj)
      .then((res) => dispatch(addTodoSuccess(res.data)))
      .catch((err) => dispatch(addTodoFailure(err)));

    // dispatch({ type: types.ADD_TODO_REQUEST });
    // const values = elementData.current.value;
    // dispatch(AddTodo({ values }));
  };

  // if (value.isLoading) {
  //   return <h5>loading...</h5>;
  // }

  return (
    <>
      {/* <div>TodosAdd</div> */}
      <input
        type="text"
        placeholder="enter the todos!!!"
        ref={elementData}
        autoComplete="off"
      />
      <input type="button" value="add" onClick={handleInputVal} />
      <TodosList />
    </>
  );
};
