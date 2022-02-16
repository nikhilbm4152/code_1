import * as actionTypes from "./types";

const INITIAL_STATE = {
  value: "",
};

const valueReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CLICK:
      return {
        ...state,
        value: action.output,
      };
    default:
      return state;
  }
};
export default valueReducer;
