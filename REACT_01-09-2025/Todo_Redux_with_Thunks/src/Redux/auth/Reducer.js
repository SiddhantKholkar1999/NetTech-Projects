import * as sandook from "../auth/ActionsTypes";

import { loadData } from "../../utils/localStorage";

const token = loadData("token");

const initialState = {
  token: token || "",
  isAuth: false,
  isLoading: false,
  isError: false,
};

export const authReducer = (oldState = initialState, { type, payload }) => {
  switch (type) {
    case sandook.GET_LOGIN_REQUEST: {
      return {
        ...oldState,
        isLoading: true,
        isError: false,
      };
    }

    case sandook.GET_LOGIN_SUCCESS: {
      return {
        ...oldState,
        isLoading: false,
        isError: false,
        todos: [...oldState.todos, payload],
      };
    }

    case sandook.GET_LOGIN_FAILURE: {
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    }
    default:
      oldState;
  }
};
