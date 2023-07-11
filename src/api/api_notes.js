import axios from "axios";

const url = "https://note-dev-api.onrender.com";
// const url = "http://localhost:8080";

export const GET_NOTES = async (author, token) => {
  const data = await axios.get(`${url}/notes/get-notes/${author}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export const POST_NOTES = async (author, token) => {
  return await axios.post(
    `${url}/notes/create-notes/`,
    {
      author,
      title: "Nova Nota",
      body: "Nova nota...",
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const DELETE_NOTES = async (id, author, token) => {
  const data = await axios.delete(`${url}/notes/delete-note/${author}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: {
      id: id,
    },
  });
  return data;
};

export const UPDATE_NOTE = async (id, author, title, body, token) => {
  const data = await axios.patch(
    `${url}/notes/edit-note/${author}`,
    {
      id,
      title,
      body,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return data;
};
