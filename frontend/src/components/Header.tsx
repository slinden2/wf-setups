import React from "react";
import styled from "styled-components";
import logo from "../assets/wfs-logo.png";
import Navigation from "./Navigation";

const HeaderContainer = styled.header`
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  height: var(--header-height);
  margin-bottom: 2rem;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  align-self: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Wreckfest Setups Logo" />
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
