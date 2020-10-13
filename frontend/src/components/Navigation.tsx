import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  font-size: 2rem;
  justify-content: center;

  a.active {
    color: ${(props) => props.theme.colors.darkBlue};
    text-decoration: underline;
  }

  li {
    margin: 0 1rem;
  }
`;

const Navigation: React.FC = () => {
  return (
    <div>
      <NavList>
        <NavLink exact to="/">
          <li>Suggestions</li>
        </NavLink>
        <NavLink to="/setups">
          <li>Your Setups</li>
        </NavLink>
      </NavList>
    </div>
  );
};

export default Navigation;
