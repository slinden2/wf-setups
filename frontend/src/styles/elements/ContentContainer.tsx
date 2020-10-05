import styled, { css } from "styled-components";

export const ContentContainer = styled.section<{ isAuth: boolean }>`
  margin: 0 auto;
  max-width: 768px;

  ${(props) =>
    props.isAuth &&
    css`
      min-height: calc(100vh - var(--header-height));
      background-color: ${(props) => props.theme.colors.white};
      border-radius: ${(props) => props.theme.borderRadius};
      padding: 1.5rem;
      box-shadow: ${(props) => props.theme.boxShadow};
    `}
`;
