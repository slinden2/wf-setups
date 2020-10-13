import React from "react";
import styled, { css } from "styled-components";
import { useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Container = styled.section<{ showAuth: boolean }>`
  margin: 0 auto;
  margin-bottom: 2rem;
  max-width: 768px;

  ${(props) =>
    !props.showAuth &&
    css`
      min-height: calc(100vh - var(--header-height) - 2rem);
      background-color: ${(props) => props.theme.colors.white};
      border-radius: ${(props) => props.theme.borderRadius};
      padding: 1.5rem;
      box-shadow: ${(props) => props.theme.boxShadow};
    `}
`;

export const ContentContainer: React.FC = ({ children }) => {
  const location = useLocation();
  const { isAuth } = useAuthContext();

  // showAuth is needed only when authentication module is displayed
  const showAuth = location.pathname !== "/" && !isAuth;

  return <Container showAuth={showAuth}>{children}</Container>;
};

export default ContentContainer;
