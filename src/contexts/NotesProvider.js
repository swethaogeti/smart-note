import { useContext, useState } from "react";
import { useEffect, useReducer } from "react";
import { createContext } from "react";
import { SET_NOTES } from "../constants";
import { notesReducer } from "../reducers";
import { getNotesService } from "../services/services";
import { useAuth } from "./AuthProvider";

const NotesContext = createContext();
export const NotesProvider = ({ children }) => {
  const { user } = useAuth();
  const [notes, dispatchNotes] = useReducer(notesReducer, []);
  const [uniqueTags, setUniqueTags] = useState([]);
  useEffect(() => {
    if (user.token) {
      (async () => {
        const response = await getNotesService(user.token);

        if (response !== undefined) {
          dispatchNotes({ type: SET_NOTES, payload: response.data.notes });
        }
      })();
    } else {
      dispatchNotes({ type: SET_NOTES, payload: [] });
    }
  }, [user]);

  return (
    <NotesContext.Provider
      value={{ notes, uniqueTags, setUniqueTags, dispatchNotes }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
