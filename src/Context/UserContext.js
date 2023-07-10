import { createContext, useState } from "react";
import { LOGIN_USER, VERIFY_TOKEN, CREATE_USER } from "../api/api_user";

export const UserGlobalContext = createContext();

export const UserContext = ({ children }) => {
  const [load, setLoad] = useState(false);
  const [loadInitial, setLoadInitial] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState("");
  const [loged, setLoged] = useState(false);

  async function createUser(name, email, password) {
    setLoad(true);
    setError(null);
    try {
      const { data } = await CREATE_USER(name, email, password);

      window.localStorage.setItem("user-name", data.user.name);
      window.localStorage.setItem("email", data.user.email);
      window.localStorage.setItem("id", data.user.id);
      window.localStorage.setItem("token", data.user.token);
      setUser(data.user);
      setLoged(true);
      return true;
    } catch (error) {
      setError("Email ja cadastrado!");
      return false;
    } finally {
      setLoad(false);
    }
  }

  async function loginUser(email, password) {
    setLoad(true);
    setError(null);
    try {
      const { data } = await LOGIN_USER(email, password);
      window.localStorage.setItem("user-name", data.name);
      window.localStorage.setItem("email", data.email);
      window.localStorage.setItem("id", data.id);
      window.localStorage.setItem("token", data.token);
      setUser(data);
      setLoged(true);
    } catch (error) {
      setError("Email ou senha inválido");
    } finally {
      setLoad(false);
    }
  }

  async function verifyLogin() {
    setLoadInitial(true);
    try {
      setLoged(false);
      const token = window.localStorage.getItem("token");
      if (token) {
        const { data } = await VERIFY_TOKEN(token);
        setUser(data.user);
        setLoadInitial(false);
        setLoged(true);
        return true;
      }
    } catch (error) {
      disconnectUser();
      setLoged(false);
      return false;
    } finally {
      setLoad(false);
      setLoadInitial(false);
    }
  }
  function disconnectUser() {
    setUser("");
    setLoad(false);
    setError(null);
    setLoged(false);
    window.localStorage.removeItem("user-name");
    window.localStorage.removeItem("email");
    window.localStorage.removeItem("id");
    window.localStorage.removeItem("token");
  }

  return (
    <UserGlobalContext.Provider
      value={{
        createUser,
        loginUser,
        verifyLogin,
        disconnectUser,
        user,
        load,
        error,
        loged,
        loadInitial,
      }}
    >
      {children}
    </UserGlobalContext.Provider>
  );
};
