import React from "react";

import { useLocation } from "react-router-dom";

const Auth = () => {
  const queryParams = new URLSearchParams(useLocation().search);
  const code = queryParams.get("code");

  if (!code) {
    throw new Error("No auth code provided!");
  }

  return <div></div>;
};

export default Auth;
