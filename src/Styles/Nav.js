import styled from "styled-components";

export const Nav = styled.div`
  background-color: ${(props) => props.background || "#fff"};
  border-bottom: 2px solid #000;
  height: 70px;
  width: 100%;
  display: flex;

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 80%;
  }

  .header-container-modal {
    display: flex;
    align-items: center;
  }

  img {
    height: 50px;
  }
  a {
    cursor: pointer;
  }

  @media (max-width: 1220px) {
  }
`;
