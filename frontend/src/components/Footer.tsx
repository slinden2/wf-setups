import React from "react";
import styled from "styled-components";

const SFooter = styled.div``;

const Content = styled.div``;

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
          </p>
        </Author>
      </Content>
    </SFooter>
  );
};

export default Footer;
