import React from 'react';
import styled from 'styled-components';
import ProductImage from '../../components/admin/ProductImage';
import RegisterInfo from '../../components/admin/RegisterInfo';

const AuthRegister = () => {
  return (
    <Container>
      <ProductImage />
      <RegisterInfo />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
`;

export default AuthRegister;
