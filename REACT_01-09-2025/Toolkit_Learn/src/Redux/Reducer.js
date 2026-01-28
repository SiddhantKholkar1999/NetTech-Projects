import * as types from "./ActionTypes";

export const myOwnReducer = (oldState = { count: 0 }, { type, payload }) => {
  switch (type) {
    case types.INCREMENT_COUNTER:
      return {
        ...oldState,
        count: oldState.count + 1,
      };

    case types.DECREMENT_COUNTER:
      return {
        ...oldState,
        count: oldState.count - 1,
      };

    case types.RESET_COUNTER:
      return {
        ...oldState,
        count: 0,
      };
    default:
      return oldState;
  }
};
