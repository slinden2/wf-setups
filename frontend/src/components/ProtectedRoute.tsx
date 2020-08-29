import React from "react";
import { Route, RouteProps } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import AuthPage from "./user/AuthPage";

const ProtectedRoute: React.FC<RouteProps> = (props) => {
  const { isAuth } = useAuthContext();

  return isAuth ? <Route {...props} /> : <AuthPage />;
};

export default ProtectedRoute;
