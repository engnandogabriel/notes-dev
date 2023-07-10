// import React from "react";
import { Nav } from "../../Styles/Nav";
import LogoBlack from "../../assets/logo.png";
import { Span } from "../../Styles/Text";

import { UserGlobalContext } from "../../Context/UserContext";
import { useContext } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const { loged, user, disconnectUser } = useContext(UserGlobalContext);

  if (loged)
    return (
      <>
        <Nav>
          <div className=" header-content">
            <Link to="/">
              <img src={LogoBlack} alt="" />
            </Link>
            <Span onClick={disconnectUser} style={{ cursor: "pointer" }}>
              <FontAwesomeIcon icon={faRightToBracket} />
              <Span>{user.name}</Span>
            </Span>
          </div>
        </Nav>
      </>
    );

  return (
    <>
      <Nav>
        <div className=" header-content">
          <Link to="/">
            <img src={LogoBlack} alt="" />
          </Link>

          <Link to="/login">
            <Span>
              <FontAwesomeIcon icon={faUser} />
              Login
            </Span>
          </Link>
        </div>
      </Nav>
    </>
  );
};

export default Header;
