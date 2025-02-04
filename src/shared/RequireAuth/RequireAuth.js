import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthUser from "../../Hooks/authUser";

const RequireAuth = ({ children }) => {
  const { userInfo } = AuthUser();
  let location = useLocation();

  if (!userInfo?.role) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
