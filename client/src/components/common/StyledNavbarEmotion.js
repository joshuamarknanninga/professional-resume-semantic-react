// src/components/common/StyledNavbarEmotion.js
/** @jsxImportSource @emotion/react */
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import logo from '../../assets/images/logo.png';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  img {
    height: 50px;
    width: auto;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  transition: color 0.3s ease;

  &.active {
    color: #007BFF;
    font-weight: bold;
    border-bottom: 2px solid #007BFF;
  }

  &:hover {
    color: #007BFF;
  }
`;

const StyledNavbarEmotion = () => {
  return (
    <NavbarContainer>
      <Logo>
        <NavLink to="/">
          <img src={logo} alt="Your Company Logo" />
        </NavLink>
      </Logo>
      <NavLinks>
        <li>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/about">
            About
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/projects">
            Projects
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/contact">
            Contact
          </StyledNavLink>
        </li>
      </NavLinks>
    </NavbarContainer>
  );
};

export default StyledNavbarEmotion;