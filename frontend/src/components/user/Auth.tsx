import React from "react";
import { useLocation, useHistory } from "react-router-dom";

import { useLoginMutation } from "../../generated/apolloComponents";

const Auth = () => {
  const queryParams = new URLSearchParams(useLocation().search);
  const code = queryParams.get("code");

  const history = useHistory();

  const [login] = useLoginMutation({ variables: { code: code || "" } });

  React.useEffect(() => {
    login().then(() => {
      // redirect to home
      history.replace("/");
    });
  }, [login, history]);

  return <div></div>;
};

export default Auth;
