import React from "react";
import { InlineIcon } from "@iconify/react";
import discordIcon from "@iconify/icons-simple-icons/discord";
import config from "../../config";
import styled from "styled-components";
import Footer from "../Footer";
import { Button } from "../../styles/elements/Button";

const AuthContainer = styled.div`
  min-height: calc(100vh - var(--header-height));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LoginContainer = styled.div`
  margin: 2rem auto;
  width: 100%;
  max-width: 448px;
  padding: 48px;
  padding-bottom: 32px;
  box-shadow: rgba(60, 66, 87, 0.12) 0px 7px 14px 0px,
    rgba(0, 0, 0, 0.12) 0px 3px 6px 0px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius};

  .header {
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 3.2rem;

    span {
      margin-left: 1rem;
    }
  }
`;

const AuthPage = () => {
  const onClickHandler = () => {
    window.location.href = config.discordAuthUrl;
  };

  return (
    <AuthContainer>
      <LoginContainer>
        <div className="header">
          <InlineIcon icon={discordIcon} width="3em" />
          <span>Get Discord token</span>
        </div>
        <Button onClick={onClickHandler} extendWidth>
          Login through Discord
        </Button>
      </LoginContainer>
      <Footer />
    </AuthContainer>
  );
};

export default AuthPage;
