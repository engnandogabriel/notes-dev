import { createContext, useState } from "react";

export const GlobalHandelContext = createContext();

export const FuntionHandleContext = ({ children }) => {
  const [modal, setModal] = useState(true);
  const [currnetIdNotes, setCurrentIdNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState([]);

  function clearHandleFunction() {
    setCurrentIdNotes([]);
    setCurrentNote([]);
  }

  function regexTitle(text) {
    return text.replace(/<[^>]+>|(&nbsp;)/g, "").slice(0, 15);
  }
  function regexBody(text) {
    return text.replace(/<[^>]+>|(&nbsp;)/g, "").slice(0, 30);
  }

  function handleModal() {
    setModal(!modal);
  }

  function getCurrentIdNotes(id) {
    setCurrentIdNotes(id);
  }
  function getCurrentNote(note) {
    setCurrentNote(note);
    getCurrentIdNotes(note.id);
  }
  return (
    <GlobalHandelContext.Provider
      value={{
        handleModal,
        getCurrentNote,
        getCurrentIdNotes,
        regexTitle,
        regexBody,
        clearHandleFunction,
        modal,
        currnetIdNotes,
        currentNote,
      }}
    >
      {children}
    </GlobalHandelContext.Provider>
  );
};
