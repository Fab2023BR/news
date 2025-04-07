import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element, isLoggedIn, ...rest }) {
  return isLoggedIn ? element : <Navigate to="/login" />;
}

export default ProtectedRoute;
