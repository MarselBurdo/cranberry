import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUserName } from "../../redux/selectors";

export default function PrivateRoute({ children, redirectToUrl = "/login" }) {
  const user = useSelector(getUserName);

  return <>{user ? children : <Navigate to={redirectToUrl} />}</>;
}
