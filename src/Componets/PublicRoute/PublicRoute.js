import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserName } from "../../redux/selectors";

export default function PublicRoute({ children, redirectToUrl = "/" }) {
  const user = useSelector(getUserName);

  return <>{user ? <Navigate to={redirectToUrl} /> : children}</>;
}
