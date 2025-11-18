import * as types from "./ActionsTypes";

export const getRequestTodo = () => {
  return {
    type: types.GET_TODO_REQUEST,
  };
};

export const getSuccessTodo = (payload) => {
  return {
    type: types.GET_TODO_SUCCESS,
    payload: payload,
  };
};

export const getFailureTodo = (payload) => {
  return {
    type: types.GET_TODO_FAILURE,
    payload: payload,
  };
};

// ! here I'm doing the add into api

export const addTodoRequest = () => {
  return {
    type: types.ADD_TODO_REQUEST,
  };
};

export const addTodoFailure = (payload) => {
  return {
    type: types.ADD_TODO_FAILURE,
    payload: payload,
  };
};

export const addTodoSuccess = (payload) => {
  return {
    type: types.ADD_TODO_SUCCESS,
    payload: payload,
  };
};

// ! here I'm doing the edit into api

export const editTodoRequest = () => ({
  type: types.EDITS_TODO_REQUEST,
});

export const editTodoSuccess = (payload) => ({
  type: types.EDITS_TODO_SUCCESS,
  payload: payload,
});

export const editTodoFailure = (payload) => ({
  type: types.EDITS_TODO_FAILURE,
  payload: payload,
});

// ! here I'm doing the delete into api

export const deleteTodoRequest = () => ({
  type: types.DELETE_TODO_REQUEST,
});

export const deleteTodoSuccess = (payload) => ({
  type: types.DELETE_TODO_SUCCESS,
  payload,
});

export const deleteTodoFailure = (payload) => ({
  type: types.DELETE_TODO_FAILURE,
  payload,
});

// ! here I'm doing the complete into api

export const completeTodoRequest = () => ({
  type: types.COMPLETED_TODO_REQUEST,
});

export const completeTodoSuccess = (payload) => ({
  type: types.COMPLETED_TODO_SUCCESS,
  payload,
});

export const completeTodoFailure = (payload) => ({
  type: types.COMPLETED_TODO_FAILURE,
  payload,
});
