import styled from "styled-components";

export const SideBarStyled = styled.div`
  background-color: #fff;
  margin: 0;
  padding: 8px;
  width: 30%;
  height: 100%;
  animation: showSidebar 0.4s;

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 30%;
    }
  }

  .options-slidebar {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`;
// background-color: #171923;
// position: fixed;
// height: 100%;
// top: 0px;
// left: 0px;
// width: 300px;
// left: ${(props) => (props.sidebar ? "0" : "-100%")};
// animation: showSidebar 0.4s;

// > svg {
//   position: fixed;
//   color: white;
//   width: 30px;
//   height: 30px;
//   margin-top: 32px;
//   margin-left: 32px;
//   cursor: pointer;
// }

// @keyframes showSidebar {
//   from {
//     opacity: 0;
//     width: 0;
//   }
//   to {
//     opacity: 1;
//     width: 300px;
//   }
// }
