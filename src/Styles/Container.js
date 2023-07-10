import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 80vh;
  max-width: 1200px;
  margin: 32px auto;
  display: flex;
  align-items: center;
  img {
    background-position: center;
  }

  @media (max-width: 1220px) {
    flex-direction: column;
    text-align: ${(props) => props.align || "center"};
    img {
      background-size: 50%;
    }
  }
`;

export const CardForm = styled.div`
  gap: 8px;
  box-shadow: 2px 2px 20px 0px rgba(0, 0, 0, 0.75);
  padding: 16px;
  border-radius: 16px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #fff;
  width: 100%;
  max-width: 400px;

  img {
    height: 100px;
    width: 300px;
  }
`;

export const ContainerNotes = styled.div`
  width: 100%;
  display: flex;
  height: 100vh;
  background-color: #fff;
`;

export const NotesContent = styled.div`
  overflow-y: overlay;
  height: 400px;
  margin-top: 16px;
  padding: 8px;
`;
