import React from "react";

import { Navigate } from "react-router-dom";
import { useUserContext } from "../Usercontext/Usercontext";

const ProtectedRoute = ({ Component }) => {
  const user = useUserContext();

  const tokenString = "abc";
  console.log(tokenString);

  const isLoggedIn = () => {
    if (!tokenString) {
      return false;
    } else {
      return true;
    }
  };

  console.log(user);

  const auth = isLoggedIn();

  console.log(auth);

  return auth ? Component : <Navigate to="/login" />;
};

export default ProtectedRoute;
