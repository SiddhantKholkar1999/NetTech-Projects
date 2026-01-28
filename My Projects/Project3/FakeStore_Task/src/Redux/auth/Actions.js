import { LOGIN_SUCCESS } from "../auth/ActionTypes";
export const login = (username) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_SUCCESS, payload: username });
  };
};
