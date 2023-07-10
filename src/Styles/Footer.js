import styled from "styled-components";

export const FooterDiv = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70px;
  position: relative;
  width: 100%;
  bottom: 0;
  background-color: ${(props) => props.backgroundcolor || "#6713cf"};
  font-family: "Roboto", sans-serif;
  padding: 8px;
`;
