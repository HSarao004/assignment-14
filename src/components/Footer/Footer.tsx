import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px 0;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const Li = styled.li`
  margin: 0 15px;
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Ul>
        <Li><StyledLink href="#contact">Contact</StyledLink></Li>
        <Li><StyledLink href="#projects">Projects</StyledLink></Li>
        <Li><StyledLink href="#about">About</StyledLink></Li>
      </Ul>
      <p>All rights reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
