import React from "react";
import styled from "styled-components";

const SFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px dashed ${(props) => props.theme.colors.lightGrey2};
`;

const Content = styled.div`
  font-size: 1.4rem;
  text-align: center;

  p {
    margin: 1rem auto;
  }
`;

const Author = styled.div``;

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
            {` ${new Date().getFullYear()}`}
          </p>
        </Author>
      </Content>
    </SFooter>
  );
};

export default Footer;
