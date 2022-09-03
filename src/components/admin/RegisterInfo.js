import React from 'react';
import RegisterInput from './RegisterInput';
import RegisterCheck from './RegisterCheck';
import styled from 'styled-components';

function RegisterInfo() {
  return (
    <ProductForm>
      <RegisterInput boxTitle={'상품명'} boxHeight={'67px'} inputHeight={'31px'}></RegisterInput>
      <RegisterInput boxTitle={'판매가'} boxHeight={'67px'} inputHeight={'31px'}></RegisterInput>
      <RegisterInput boxTitle={'할인률'} boxHeight={'67px'} inputHeight={'31px'}></RegisterInput>
      <RegisterInput boxTitle={'재고수량'} boxHeight={'67px'} inputHeight={'31px'}></RegisterInput>
      <RegisterCheck></RegisterCheck>
      <RegisterInput
        boxTitle={'상품설명'}
        boxHeight={'135px'}
        inputHeight={'102px'}
      ></RegisterInput>
    </ProductForm>
  );
}

const ProductForm = styled.form`
  width: 755px;
  height: 584px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export default RegisterInfo;
