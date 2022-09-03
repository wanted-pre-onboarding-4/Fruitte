import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';

const Header = () => {
  return (
    <Container>
      <LogoImageContainer to="/">
        <Logo />
      </LogoImageContainer>
      <HeaderItemContainer>
        <HeaderItem to="/">FRUITTE</HeaderItem>
        <HeaderItem to="/">FRUIT NOW</HeaderItem>
        <HeaderItem to="/fruitstore">FRUIT STORE</HeaderItem>
        <HeaderItem to="/">FRUIT PLAY</HeaderItem>
        <HeaderItem to="/">ABOUT US</HeaderItem>
      </HeaderItemContainer>
      <AuthItemContainer>
        <AuthItem to="/">login</AuthItem>
        <AuthItem to="/">join</AuthItem>
      </AuthItemContainer>
    </Container>
  );
};

const Container = styled.nav`
  position: sticky;
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;
`;

const LogoImageContainer = styled(Link)`
  margin: 7.5px;
`;

const HeaderItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeaderItem = styled(Link)`
  margin: 0px 20px;
  font-size: 20px;
`;

const AuthItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

const AuthItem = styled(Link)`
  margin-right: 30px;
`;

export default Header;
