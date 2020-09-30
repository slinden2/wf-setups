import React from "react";
import styled, { css } from "styled-components";

const SFooter = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  border-top: 3px dashed rgba(50, 50, 50, 0.5);
  background-color: ${(props) => props.theme.colors.mainLight};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;

  p {
    margin: 1.5rem auto;
  }

  @media (max-width: 400px) {
    font-size: 1rem;

    p {
      margin: 1rem auto;
    }
  }
`;

const linkStyles = css`
  display: block;
  content: "";
  position: absolute;
  left: 0;
  height: 2px;
  width: 100%;
`;

const Content = styled.div`
  margin-top: 1rem;
  background-color: ${(props) => props.theme.colors.main};
  padding: 4rem;
  color: ${(props) => props.theme.colors.white};
  text-align: center;

  a {
    font-style: italic;
    position: relative;

    ::after {
      ${linkStyles}
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }

  a:hover {
    ::after {
      ${linkStyles}
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }
`;

const Author = styled.div`
  padding: 2rem;
`;

const Footer = () => {
  return (
    <SFooter>
      <Content>
        <p>
          Are you able to communicate in Finnish and love competitive racing?
        </p>
        <p>
          Check out{" "}
          <a href="https://www.sundaynightwreckfest.fi/snw">
            Sunday Night Wreckfest
          </a>{" "}
          racing community!
        </p>
        <Author>
          <p>
            To leave feedback join the{" "}
            <a href="https://discord.gg/EzfmsEV">Discord server</a> and leave a
            message.
          </p>
          <p>
            &#169;{" "}
            <a href="https://discordapp.com/users/472514364348432384">looni</a>
          </p>
        </Author>
      </Content>
    </SFooter>
  );
};

export default Footer;
