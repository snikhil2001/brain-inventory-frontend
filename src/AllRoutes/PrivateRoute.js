import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const data = useSelector((store) => store.auth);

  if (data.token === null) {
    alert("Please login");
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
