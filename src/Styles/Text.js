import styled from "styled-components";

export const Title = styled.h2`
  font-size: 36px;
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.color || "#fff"};
`;

export const Parag = styled.p`
  font-size: 24px;
  color: ${(props) => props.color || "#fff"};
  font-family: "Roboto", sans-serif;
`;

export const Span = styled.span`
  font-size: ${(props) => props.fontSize || "24px"};
  color: ${(props) => props.color || "#6713cf"};
  font-family: "Open Sans", sans-serif;
  font-weight: ${(props) => props.weight || 700};
`;

export const Link = styled.a`
  text-decoration: none;
`;
