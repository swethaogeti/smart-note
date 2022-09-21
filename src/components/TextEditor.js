import React from "react";
import { QuillEditor } from "./QuillEditor/QuillEditor";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import { Priority } from "./Priority";
import { ColorPallete } from "./ColorPallete";
import { Tags } from "./Tags";
import { editorReducer } from "../reducers/editorReducer";
import { useReducer } from "react";
import { matchPath, useLocation, useNavigate } from "react-router-dom";
import {
  CLEAR_EDITOR,
  COLOR,
  NOTE,
  PRIORITY,
  SET_NOTES,
  TAGS,
  TITLE,
} from "../constants";
import { useAuth } from "../contexts/AuthProvider";
import { addNoteService, updateNoteService } from "../services/services";
import { useNotes } from "../contexts/NotesProvider";

export const TextEditor = ({ editorState }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [editor, dispatchEditor] = useReducer(editorReducer, editorState);
  const { note, title, color, priority, tags } = editor;
  const { dispatchNotes } = useNotes();

  const addNoteHandler = async () => {
    const response = await addNoteService(user.token, {
      ...editor,
      created: new Date(),
    });
    dispatchNotes({ type: SET_NOTES, payload: response.data.notes });
    dispatchEditor({ type: CLEAR_EDITOR });
  };

  const editNoteHandler = async () => {
    const response = await updateNoteService(user.token, {
      ...editor,
      created: new Date(),
    });
    dispatchNotes({ type: SET_NOTES, payload: response.data.notes });
    console.log(response.data.notes);
    navigate("/notes");
  };
  return (
    <div
      style={{ backgroundColor: color }}
      className={`sm:max-w-[500px] max-w-[480px] sm:m-2 p-2
      ]} mx-4 flex flex-wrap 	shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md`}
    >
      <div className="flex  justify-between items-center  w-full">
        <input
          placeholder="Title"
          className="flex-1 flex flex-wrap  text-[1.2rem] 
          placeholder-black
          rounded-md
          bg-transparent
          sm:text-[1.5rem] font-[600] text-gray-700 outline-none"
          value={title}
          onChange={(e) =>
            dispatchEditor({ type: TITLE, payload: e.target.value })
          }
        ></input>

        {pathname == "/notes/:noteId" && (
          <PushPinOutlinedIcon className="cursor-pointer btn" />
        )}
      </div>
      <QuillEditor
        value={note}
        setValue={(event) => dispatchEditor({ type: NOTE, payload: event })}
      />
      {tags?.map((item) => {
        return (
          <div>
            <button className="px-[2px] py-[1px] m-1 text-[1rem] bg-white border-2 text-black border-gray-400 rounded-md">
              {item}
            </button>
          </div>
        );
      })}
      <div className="flex  w-full justify-between items-center py-2">
        <div className="space-x-4 cursor-pointer flex ">
          <ColorPallete
            color={color}
            changeColor={(color) =>
              dispatchEditor({ type: COLOR, payload: color })
            }
          />
          <Tags
            tags={tags}
            toggleTag={(tag) =>
              dispatchEditor({
                type: TAGS,
                payload: tag,
              })
            }
          />
          <Priority
            priority={priority}
            changePriority={(priority) =>
              dispatchEditor({ type: PRIORITY, payload: priority })
            }
          />
        </div>
        <div>
          {matchPath("/note", pathname) ? (
            <button
              className="bg-gray-700 text-white sm:p-1 w-10 sm:w-14 rounded-md font-[600] cursor-pointer"
              onClick={addNoteHandler}
            >
              Add
            </button>
          ) : (
            <button
              className="bg-gray-700 text-white sm:p-1 w-10 sm:w-14 rounded-md font-[600] cursor-pointer"
              onClick={editNoteHandler}
            >
              add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
