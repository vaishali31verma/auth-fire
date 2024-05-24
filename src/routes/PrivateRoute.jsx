import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/useAuth";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { isLoggedIn } = useAuth();
  return isLoggedIn() ? (
    children
  ) : (
    <Navigate to="/signIn" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
