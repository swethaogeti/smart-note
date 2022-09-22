import {
  CLEAR_FILTERS,
  FILTER_PRIORITIES,
  FILTER_SORT_BY,
  FILTER_TAGS,
} from "../constants";

export const initialState = {
  sortBy: "old-to-new",
  priorities: [],
  tags: [],
};

export const filterReducer = (state, action) => {
  switch (action.type) {
    case FILTER_SORT_BY:
      return { ...state, sortBy: action.payload };

    case FILTER_PRIORITIES:
      const newPriorities = state.priorities.include(action.payload)
        ? state.priorities.filter((priority) => priority !== action.payload)
        : [...state.priorities, action.payload];
      return { ...state, priorities: newPriorities };

    case FILTER_TAGS:
      const newTags = state.tags.include(action.payload)
        ? state.tags.filter((tag) => tag !== action.payload)
        : [...state.tags, action.payload];
      return { ...state, tags: newTags };

    case CLEAR_FILTERS:
      return initialState;

    default:
      return state;
  }
};
