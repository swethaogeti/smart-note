import { CLEAR_EDITOR, COLOR, NOTE, PRIORITY, TAGS, TITLE } from "../constants";

export const initialEditorState = {
  title: "",
  color: "#FFFFFF",
  tags: [],
  priority: "Low",
  note: "",
};

export const editorReducer = (state, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case TITLE:
      return { ...state, title: action.payload };

    case COLOR:
      return { ...state, color: action.payload };

    case TAGS:
      const newTags = state.tags.find((tag) => tag === action.payload)
        ? state.tags.filter((tag) => tag !== action.payload)
        : [...state.tags, action.payload];
      console.log(newTags);
      return { ...state, tags: newTags };

    case PRIORITY:
      return { ...state, priority: action.payload };
    case NOTE:
      return { ...state, note: action.payload };
    case CLEAR_EDITOR:
      return initialEditorState;
    default:
      return state;
  }
};
