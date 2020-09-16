import React from "react";
import { InlineIcon } from "@iconify/react";
import discordIcon from "@iconify/icons-logos/discord";
import config from "../../config";

const AuthPage = () => {
  const onClickHandler = () => {
    window.location.href = config.discordAuthUrl;
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
