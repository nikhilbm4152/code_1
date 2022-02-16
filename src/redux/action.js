import * as actionTypes from "./types";

export const buttonClick = (value) => {
  return {
    type: actionTypes.CLICK,
    payload: {
      output: value,
    },
  };
};
