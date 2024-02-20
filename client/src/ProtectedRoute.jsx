import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";

const ProtectedRoute = ({ element, ...rest }) => {
  const [cookies] = useCookies(["access-token"]);
  return cookies["access-token"] ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
