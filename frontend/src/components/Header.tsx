import React from "react";
import styled from "styled-components";
import logo from "../assets/wfs-logo.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 1rem;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 500px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} alt="Wreckfest Setups Logo" />
    </HeaderContainer>
  );
};

export default Header;
