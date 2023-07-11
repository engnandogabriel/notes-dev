import { createContext, useState } from "react";
import {
  GET_NOTES,
  POST_NOTES,
  DELETE_NOTES,
  UPDATE_NOTE,
} from "../api/api_notes";

export const NotesGlobalContex = createContext();

export const NotesContext = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  function clearNotes() {
    setNotes([]);
  }

  async function getNotes() {
    try {
      const auhtor = window.localStorage.getItem("id");
      const token = window.localStorage.getItem("token");
      const { data } = await GET_NOTES(auhtor, token);
      setNotes(data.notes.reverse());
    } catch (error) {}
  }

  async function postNotes() {
    try {
      const auhtor = window.localStorage.getItem("id");
      const token = window.localStorage.getItem("token");

      await POST_NOTES(auhtor, token);
      getNotes();
    } catch (error) {}
  }

  async function deleteNote(id, author) {
    try {
      const token = window.localStorage.getItem("token");
      await DELETE_NOTES(id, author, token);
    } catch (error) {
    } finally {
      getNotes();
    }
  }

  async function saveNotes(id, author, body) {
    try {
      setError(null);
      setLoad(true);
      if (body) {
        const token = window.localStorage.getItem("token");

        const title = body.replace(/(<([^>]+)>)/gi, "").slice(0, 30);

        await UPDATE_NOTE(id, author, title, body, token);
        getNotes();
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoad(false);
    }
  }

  return (
    <NotesGlobalContex.Provider
      value={{
        getNotes,
        postNotes,
        deleteNote,
        saveNotes,
        clearNotes,
        notes,
        load,
        error,
      }}
    >
      {children}
    </NotesGlobalContex.Provider>
  );
};
