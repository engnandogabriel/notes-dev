import React, { useContext, useEffect } from "react";
import moment from "moment";

import { NotesStyled } from "../../Styles/Notes";
import { Span } from "../../Styles/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

import { NotesGlobalContex } from "../../Context/NotesContext";
import { GlobalHandelContext } from "../../Context/Functions/HandleFunctios";
import { Button } from "../../Styles/Button";
import { NotesContent } from "../../Styles/Container";
const Notes = () => {
  const { getNotes, notes, deleteNote, load } = useContext(NotesGlobalContex);
  const { getCurrentNote, currnetIdNotes, regexTitle, regexBody } =
    useContext(GlobalHandelContext);

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <NotesContent>
        {notes.map((note, index) => (
          <NotesStyled
            backgroundcolor={currnetIdNotes === note.id ? "#ccc" : "#fff"}
            key={index}
          >
            <div className="content-notes">
              <Span>{regexTitle(note.title)}...</Span>
              <Span fontSize="18px" color="#000" weight="500">
                {regexBody(note.body)}
                ...
              </Span>
            </div>
            <div className="data-notes">
              <span>
                Criada em: {moment(note.created_at).format("DD/MM/YYYY")}
              </span>
              <span>
                Atualizada em: {moment(note.atualized_at).format("DD/MM/YYYY")}
              </span>
              <div className="button-notes-actions">
                <Button
                  background="#6713CF"
                  hoverbackground="#5c10b8"
                  hovercolor="#fff"
                  onClick={() => getCurrentNote(note)}
                >
                  <FontAwesomeIcon icon={faPenToSquare} />
                  Editar
                </Button>
                <Button
                  onClick={() => deleteNote(note.id, note.author)}
                  background="#6713CF"
                  hoverbackground="#5c10b8"
                  hovercolor="#fff"
                >
                  <FontAwesomeIcon icon={faTrash} />
                  Excluir
                </Button>
                {load && <p>Salvando...</p>}
              </div>
            </div>
          </NotesStyled>
        ))}
      </NotesContent>
    </>
  );
};

export default Notes;
