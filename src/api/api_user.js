import axios from "axios";

const url = "https://note-dev-api.onrender.com";

export const CREATE_USER = async (name, email, password) => {
  const data = await axios.post(`${url}/login/create-user`, {
    name,
    email,
    password,
  });
  return data;
};

export const LOGIN_USER = async (email, password) => {
  const data = axios.post(`${url}/login`, { email, password });
  return data;
};

export const VERIFY_TOKEN = async (token) => {
  return await axios.post(`${url}/login/verify`, {
    token,
  });
};
