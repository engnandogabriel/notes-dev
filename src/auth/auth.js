import { useContext } from "react";
import { UserGlobalContext } from "../Context/UserContext";

export const Auth = () => {
  const { verifyLogin } = useContext(UserGlobalContext);
  if (verifyLogin()) return true;
  return false;
};
