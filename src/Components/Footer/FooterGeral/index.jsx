import React from "react";
import { FooterDiv } from "../../../Styles/Footer";

import { Span } from "../../../Styles/Text";

const Footer = () => {
  if (window.location.href === "http://localhost:3000/notes")
    return (
      <>
        <FooterDiv backgroundcolor="#fff">
          <Span weight="100" color="#6713cf">
            Projeto desenvolvido para fins educacionais!
          </Span>
        </FooterDiv>
      </>
    );
};

export default Footer;
