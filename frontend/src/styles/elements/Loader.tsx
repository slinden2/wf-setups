import React from "react";
import styled, { keyframes } from "styled-components";

const loadingAnimation1 = keyframes`
  0% { color: transparent; }
  5% { color: transparent; }
  15% { color: black; }
  100% { color: black; }
`;

const loadingAnimation2 = keyframes`
  0% { color: transparent; }
  30% { color: transparent; }
  40% { color: black; }
  100% { color: black; }
`;

const loadingAnimation3 = keyframes`
  0% { color: transparent; }
  50% { color: transparent; }
  60% { color: black; }
  100% { color: black; }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  font-size: 2rem;
  font-weight: 500;

  .animated > span {
    animation: 1.5s infinite forwards linear;
  }

  .animated > span:nth-child(1) {
    animation-name: ${loadingAnimation1};
  }

  .animated > span:nth-child(2) {
    animation-name: ${loadingAnimation2};
  }

  .animated > span:nth-child(3) {
    animation-name: ${loadingAnimation3};
  }
`;

interface Props {
  text: string;
}

const Loader: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <Content>
        <span>{text}</span>
        <span className="animated">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      </Content>
    </Container>
  );
};

export default Loader;
