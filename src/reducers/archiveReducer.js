import { SET_ARCHIVE } from "../constants";

export const archiveReducer = (action, state) => {
  switch (action.type) {
    case SET_ARCHIVE:
      return action.payload;
    default:
      return state;
  }
};
