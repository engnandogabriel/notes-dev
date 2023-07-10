import React, { useContext } from "react";
import { SideBarStyled } from "../../Styles/SideBar";
import { Title, Span } from "../../Styles/Text";
import Input from "../Input/index";
import { Button } from "../../Styles/Button";
import Notes from "../Notes";

import { NotesGlobalContex } from "../../Context/NotesContext";

const Sidebar = () => {
  const { postNotes, notes } = useContext(NotesGlobalContex);

  return (
    <>
      <SideBarStyled>
        <Title color="#000">Suas Notas</Title>
        <Span>{notes.length} notas</Span>
        <div className="options-slidebar">
          <Input placeholder="pesquisar..." />
          <Button
            background="#6713CF"
            hoverbackground="#5c10b8"
            hovercolor="#fff"
            onClick={() => postNotes()}
          >
            Adicionar nova nota
          </Button>
        </div>
        <Notes />
      </SideBarStyled>
    </>
  );
};

export default Sidebar;
