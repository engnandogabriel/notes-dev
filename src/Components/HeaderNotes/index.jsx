// import React from "react";
import { Nav } from "../../Styles/Nav";
import LogoWhite from "../../assets/logo-white.png";
import { Span } from "../../Styles/Text";
import { Button } from "../../Styles/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faRightToBracket } from "@fortawesome/free-solid-svg-icons";

import { UserGlobalContext } from "../../Context/UserContext";
import { GlobalHandelContext } from "../../Context/Functions/HandleFunctios";
import { NotesGlobalContex } from "../../Context/NotesContext";

import { useContext } from "react";
import { Link } from "react-router-dom";

const HeaderNotes = () => {
  const { loged, user, disconnectUser } = useContext(UserGlobalContext);
  const { clearNotes } = useContext(NotesGlobalContex);
  const { handleModal, clearHandleFunction } = useContext(GlobalHandelContext);

  const clearAll = () => {
    disconnectUser();
    clearNotes();
    clearHandleFunction();
  };

  if (loged) {
    return (
      <>
        <Nav background="#6713cf">
          <div className=" header-content">
            <div className="header-container-modal">
              <Button onClick={handleModal}>
                <FontAwesomeIcon icon={faBars} />
              </Button>
              <img src={LogoWhite} alt="" />
            </div>
            <Link to="/">
              <Span
                color="#fff"
                onClick={clearAll}
                style={{ cursor: "pointer" }}
              >
                <FontAwesomeIcon icon={faRightToBracket} />
                <Span color="#fff">{user.name}</Span>
              </Span>
            </Link>
          </div>
        </Nav>
      </>
    );
  }
};

export default HeaderNotes;
