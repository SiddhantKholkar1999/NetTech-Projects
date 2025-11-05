/* eslint-disable no-unused-vars */
import { LOGIN_FAILURE, LOGIN_SUCCESS } from "../Auth/Action";

const initialState = {
  // token: token ? true : false,
};

export const authReducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {};

    case LOGIN_FAILURE:
      return {};

    default:
      return state;
  }
};
