import React from "react";
import { InlineIcon } from "@iconify/react";
import discordIcon from "@iconify/icons-logos/discord";

const discordAuthUrl: string =
  "https://discord.com/api/oauth2/authorize?client_id=738387634262638593&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&response_type=code&scope=identify%20email";

const AuthPage = () => {
  const onClickHandler = () => {
    window.location.href = discordAuthUrl;
  };

  return (
    <div>
      <button onClick={onClickHandler}>
        <InlineIcon icon={discordIcon} width="3em" />
        <span>Access with Discord</span>
      </button>
    </div>
  );
};

export default AuthPage;
