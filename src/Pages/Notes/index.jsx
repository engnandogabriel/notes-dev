import React, { useContext, useEffect } from "react";
import HeaderNotes from "../../Components/HeaderNotes";
import Load from "../../Components/Load";
import Sidebar from "../../Components/SlideBar/index";

import { UserGlobalContext } from "../../Context/UserContext";
import { GlobalHandelContext } from "../../Context/Functions/HandleFunctios";
import { useNavigate } from "react-router-dom";
import Editor from "../../Components/Editor/MainEditor/index";
import { ContainerNotes } from "../../Styles/Container";
import Footer from "../../Components/Footer/FooterNotes";

const Notes = () => {
  const { verifyLogin, loadInitial } = useContext(UserGlobalContext);
  const { modal, currentNote } = useContext(GlobalHandelContext);
  const navigate = useNavigate();

  useEffect(() => {
    const verify = verifyLogin();
    if (!verify) navigate("/");
  }, []);

  if (loadInitial) return <Load />;

  return (
    <>
      <HeaderNotes />
      <ContainerNotes>
        {modal && <Sidebar />}
        <Editor />
      </ContainerNotes>
      <Footer />
    </>
  );
};

export default Notes;
