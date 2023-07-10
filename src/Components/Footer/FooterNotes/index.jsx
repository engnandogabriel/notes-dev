import React from "react";
import { FooterDiv } from "../../../Styles/Footer";

import { Span } from "../../../Styles/Text";

const Footer = () => {
  return (
    <>
      <FooterDiv backgroundcolor="#6713cf">
        <Span weight="100" color="#fff">
          Projeto desenvolvido para fins educacionais!
        </Span>
      </FooterDiv>
    </>
  );
};

export default Footer;
