import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const setToken = (token) => {
  return localStorage.setItem('near@gmail.com', token);
};

export const fetchToken = (token) => {
  return localStorage.getItem('near@gmail.com');
};

export function RequireToken({ children }) {
  const location = useLocation();
  const auth = fetchToken();

  if (!auth) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}
