import React from "react";
import { InlineIcon } from "@iconify/react";
import discordIcon from "@iconify/icons-simple-icons/discord";
import config from "../../config";
import styled from "styled-components";
import { Button } from "../../styles/elements/Button";

const AuthContainer = styled.div<{ footerHeight: number }>`
  min-height: calc(
    100vh - var(--header-height) - 2rem - ${(props) => props.footerHeight}px
  );
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
  box-shadow: ${(props) => props.theme.boxShadow};
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
  const [footerHeight, setFooterHeight] = React.useState<number>(135);

  const footer = document.getElementById("footer") as HTMLElement;

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      if (footer) {
        const height = footer.getBoundingClientRect().height;
        setFooterHeight(height);
      }
    });
  }, [footer, setFooterHeight]);

  const onClickHandler = () => {
    window.location.href = config.discordAuthUrl;
  };

  return (
    <AuthContainer footerHeight={footerHeight}>
      <LoginContainer>
        <div className="header">
          <InlineIcon icon={discordIcon} width="3em" />
          <span>Get Discord token</span>
        </div>
        <Button onClick={onClickHandler} extendWidth>
          Login through Discord
        </Button>
      </LoginContainer>
    </AuthContainer>
  );
};

export default AuthPage;
