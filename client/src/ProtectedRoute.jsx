import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";

const ProtectedRoute = () => {
  const [cookies] = useCookies(["session-token"]);
  return cookies["session-token"] ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
