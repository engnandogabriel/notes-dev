import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const LabelStyled = styled.label`
  width: 60px;
  font-size: 20px;
  color: #6713cf;
  border-bottom: 2px solid #6713cf;
`;

export const InputStyled = styled.input`
  font-size: 24px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: 0.2s ease;

  &:hover,
  &:focus {
    outline: none;
    border: 2px solid #6713cf;
  }
`;

export const ButtonForm = styled.button`
  background-color: ${(props) => props.background || "transparent"};
  border: 1px solid #fff;
  padding: 12px;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;

  transition: 0.2;
  &:hover {
    background-color: #5911af;
  }
`;
