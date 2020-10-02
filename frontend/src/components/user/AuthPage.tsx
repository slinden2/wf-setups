import React from "react";
import { InlineIcon } from "@iconify/react";
import discordIcon from "@iconify/icons-simple-icons/discord";
import config from "../../config";
import styled from "styled-components";

const AuthContainer = styled.div``;

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
