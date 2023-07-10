import { Outlet, Navigate } from "react-router-dom";

import { Auth } from "./auth";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const loged = Auth;
  return loged ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
