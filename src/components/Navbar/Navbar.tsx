import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  overflow: hidden;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

const Li = styled.li`
  float: left;
`;

const StyledLink = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;

  &:hover {
    background-color: #111;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <Li><StyledLink to="/">Home</StyledLink></Li>
        <Li><StyledLink to="/about">About</StyledLink></Li>
        <Li><StyledLink to="/projects">Projects</StyledLink></Li>
        <Li><StyledLink to="/contact">Contact</StyledLink></Li>
      </Ul>
    </Nav>
  );
};

export default Navbar;
