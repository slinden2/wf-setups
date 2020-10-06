import React from "react";
import { useLocation } from "react-router-dom";

import { useLoginMutation } from "../../generated/apolloComponents";
import Loader from "../../styles/elements/Loader";

const Auth = () => {
  const queryParams = new URLSearchParams(useLocation().search);
  const code = queryParams.get("code");

  const [login] = useLoginMutation({ variables: { code: code || "" } });

  React.useEffect(() => {
    login().then(() => {
      // redirect to home
      window.location.href = "/";
    });
  }, [login]);

  return <Loader text="Authenticating" />;
};

export default Auth;
