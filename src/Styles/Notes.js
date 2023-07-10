import styled from "styled-components";

export const NotesStyled = styled.div`
  background-color: ${(props) => props.backgroundcolor || "#ccc"};
  border-radius: 5px;
  margin-top: 8px;
  font-size: 16px;
  padding: 8px;
  word-wrap: break-word;
  border: 1px solid #ccc;
  cursor: pointer;
  .content-notes {
    gap: 4px;
    display: flex;
    flex-direction: column;
  }

  .data-notes {
    display: flex;
    flex-direction: column;
    padding: 2px;
  }
  .active {
    background-color: #fff;
  }
  .button-notes-actions {
    display: flex;
    gap: 8px;
  }
`;
