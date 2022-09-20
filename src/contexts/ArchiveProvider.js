import { useContext } from "react";
import { useEffect } from "react";
import { createContext, useReducer } from "react";
import { SET_ARCHIVE } from "../constants";
import { archiveReducer } from "../reducers/archiveReducer";
import { getArchivesService } from "../services/services";
import { useAuth } from "./AuthProvider";

const ArchiveContext = createContext();

export const ArchiveProvider = ({ children }) => {
  const { user } = useAuth();
  const [archives, dispatchArchives] = useReducer(archiveReducer, []);

  useEffect(() => {
    if (user.token) {
      (async () => {
        const response = await getArchivesService(user.token);
        console.log(response);
        if (response !== undefined) {
          dispatchArchives({
            type: SET_ARCHIVE,
            payload: response.data.archives,
          });
        }
      })();
    } else {
      dispatchArchives({ type: SET_ARCHIVE, payload: [] });
    }
  }, [user]);
  console.log(archives);
  return (
    <ArchiveContext.Provider value={{ archives, dispatchArchives }}>
      {children}
    </ArchiveContext.Provider>
  );
};

export const useArchives = () => useContext(ArchiveContext);
