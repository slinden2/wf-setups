import React from "react";
import styled from "styled-components";
import logo from "../assets/wfs-logo.png";

const HeaderContainer = styled.header`
  z-index: 100;
  display: flex;
  justify-content: center;
  padding: 1rem;
  height: var(--header-height);
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
    </HeaderContainer>
  );
};

export default Header;
