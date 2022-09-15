import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { SET_TRASH } from "../constants";
import { trashReducer } from "../reducers/trashReducer";
import { getTrashService } from "../services";
import { useAuth } from "./AuthProvider";

const TrashContext = createContext();

export const TrashProvider = ({ children }) => {
  const { user } = useAuth();
  const [trash, dispatchTrash] = useReducer(trashReducer, []);
  useEffect(() => {
    if (user.token) {
      (async () => {
        const response = await getTrashService(user.token);

        if (response !== undefined) {
          dispatchTrash({
            type: SET_TRASH,
            payload: response.data.trash,
          });
        }
      })();
    } else {
      dispatchTrash({
        type: SET_TRASH,
        payload: [],
      });
    }
  }, [user]);
  return (
    <TrashContext.Provider value={{ trash, dispatchTrash }}>
      {children}
    </TrashContext.Provider>
  );
};

export const useTrash = () => useContext(TrashContext);
