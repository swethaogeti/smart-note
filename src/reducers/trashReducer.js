import React from "react";
import { SET_TRASH } from "../constants";

export const trashReducer = (state, action) => {
  switch (action.type) {
    case SET_TRASH:
      return action.payload;
    default:
      return state;
  }
};
