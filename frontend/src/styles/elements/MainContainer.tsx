import styled from "styled-components";

export const MainContainer = styled.main`
  margin: 0 auto;
  max-width: 1000px;
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.mainLight};
`;
