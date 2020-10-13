import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { useLoginMutation } from "../../generated/apolloComponents";
import Loader from "../../styles/elements/Loader";

const Container = styled.div`
  min-height: calc(100vh - var(--header-height));
`;

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

  return (
    <Container>
      <Loader text="Authenticating" />
    </Container>
  );
};

export default Auth;
