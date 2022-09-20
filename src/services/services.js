import axios from "axios";

export const getNotesService = async (token) => {
  try {
    const response = await axios.get("/api/notes", {
      headers: { authorization: token },
    });
    console.log(response);
    return response;
  } catch (error) {
    console.log("error in fetching getNotesService", error);
    return;
  }
};
// export const getNotesService = async (token) => {
//   try {
//     const { data } = await axios.get("/api/notes", {
//       headers: {
//         authorization: token,
//       },
//     });
//     return data.notes;
//   } catch (error) {
//     console.error(error);
//     return;
//   }
// };
export const addNoteService = async (token, note) => {
  try {
    const response = await axios.post(
      "/api/notes",
      { note },
      {
        headers: { authorization: token },
      }
    );
    return response;
  } catch (error) {
    console.log("error occured in addNoteService", error);
    return;
  }
};

export const deleteNoteService = async (token, noteId) => {
  try {
    const response = await axios.delete(`/api/notes/${noteId}`, {
      headers: { authorization: token },
    });
    return response;
  } catch (error) {
    console.log("error occured in deleteNoteService", error);
    return;
  }
};

export const updateNoteService = async (token, note) => {
  try {
    const response = await axios.post(
      `/api/notes/${note._id}`,
      { note },
      {
        headers: { authorization: token },
      }
    );
    return response;
  } catch (error) {
    console.log("error occured in updateNoteService", error);
    return;
  }
};

export const getArchivesService = async (token) => {
  try {
    const response = await axios.get("/api/archives", {
      headers: { authorization: token },
    });
    return response;
  } catch (error) {
    console.log("erorr occured in getArchivesService", error);
    return;
  }
};

export const addNoteToArchivesService = async (token, note) => {
  try {
    const response = await axios.post(
      `/api/notes/archives/${note._id}`,
      { note },
      {
        headers: { authorization: token },
      }
    );
    return response;
  } catch (error) {
    console.log("error occured in addNoteToArchivesService", error);
    return;
  }
};

export const removeNoteFromArchivesService = async (token, noteId) => {
  try {
    const response = await axios.delete(`/api/archives/delete/${noteId}`, {
      headers: {
        authorization: token,
      },
    });
    return response;
  } catch (error) {
    console.log("error occured in removeNoteFromArchivesService", error);
    return;
  }
};

export const restoreNoteFromArchiveService = async (token, noteId) => {
  try {
    const response = await axios.post(
      `/api/archives/restore/${noteId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("error occured in restoreNoteFromArchiveService", error);
  }
};

export const getTrashService = async (token) => {
  try {
    const response = await axios.get("/api/trash", {
      headers: { authorization: token },
    });
    return response;
  } catch (error) {
    console.log("error occured in getTrashService", error);
    return;
  }
};

export const addNoteToTrashservice = async (token, note) => {
  try {
    const response = await axios.post(
      `/api/notes/trash/${note._id}`,
      { note },
      {
        headers: { authorization: token },
      }
    );
    return response;
  } catch (error) {
    console.log("error occured in addNoteToTrashservice", error);
    return;
  }
};

export const removeNoteFromTrashService = async (token, noteId) => {
  try {
    const response = await axios.delete(`/api/trash/delete/${noteId}`, {
      headers: {
        authorization: token,
      },
    });
    return response;
  } catch (error) {
    console.log("error occured in removeNoteFromTrashService", error);
    return;
  }
};

export const restoreNoteFromTrashService = async (token, noteId) => {
  try {
    const response = await axios.post(
      `/api/trash/restore/${noteId}`,
      {},
      {
        headers: {
          authorization: token,
        },
      }
    );
    return response;
  } catch (error) {
    console.log("error occured in restoreNoteFromTrashService", error);
    return;
  }
};
