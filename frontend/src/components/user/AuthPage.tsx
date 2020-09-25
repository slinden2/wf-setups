import React from "react";
import { InlineIcon } from "@iconify/react";
import discordIcon from "@iconify/icons-simple-icons/discord";
import config from "../../config";
import styled from "styled-components";

const AuthContainer = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.secondary};
  max-width: 400px;
  margin: 0 auto;
  font-weight: bold;
  overflow: auto;

  .header {
    padding: 1rem;
    display: flex;
    align-items: center;
    font-size: 2.5rem;
    border-bottom: 2px solid ${(props) => props.theme.colors.black};
    border-bottom-style: dashed;

    span {
      margin-left: 1rem;
    }
  }

  .button {
    font-size: 1.6rem;
    margin: 5rem auto;
    border-radius: ${(props) => props.theme.borderRadius};
    background-color: ${(props) => props.theme.colors.main};
    color: ${(props) => props.theme.colors.white};
    padding: 1.5rem;
    text-align: center;
    width: 50%;
    cursor: pointer;
  }
`;

const AuthPage = () => {
  const onClickHandler = () => {
    window.location.href = config.discordAuthUrl;
  };

  return (
    <AuthContainer>
      <div className="header">
        <InlineIcon icon={discordIcon} width="3em" />
        <span>GET DISCORD TOKEN</span>
      </div>
      <div className="button" onClick={onClickHandler}>
        Login through Discord
      </div>
    </AuthContainer>
  );
};

export default AuthPage;
