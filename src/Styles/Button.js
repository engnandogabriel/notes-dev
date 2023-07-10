import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.background || "transparent"};
  border: 1px solid #fff;
  padding: 12px;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;

  transition: 0.2;
  &:hover {
    background-color: ${(props) => props.hoverbackground || "#fff"};
    color: ${(props) => props.hovercolor || "#6713cf"};
  }
`;
