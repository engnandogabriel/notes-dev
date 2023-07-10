import React from "react";

import { InputStyled, LabelStyled } from "../../Styles/Form";

const Input = ({ type, value, label, ...props }) => {
  return (
    <>
      {label && <LabelStyled>{label}</LabelStyled>}
      <InputStyled type={type} value={value} {...props} />
    </>
  );
};

export default Input;
