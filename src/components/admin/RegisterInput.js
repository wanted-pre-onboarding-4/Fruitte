import React from 'react';
import styled from 'styled-components';

function RegisterInput({ boxTitle, boxHeight, inputHeight }) {
  return (
    <ProductInputBox height={boxHeight}>
      <TitleBox height={boxHeight}>{boxTitle}</TitleBox>
      <InputBox height={boxHeight}>
        <ProductInput type="text" height={inputHeight}></ProductInput>
      </InputBox>
    </ProductInputBox>
  );
}

export const ProductInputBox = styled.div`
  width: 754px;
  height: ${props => props.height};
  border: 1px solid red;
  display: flex;
`;

export const TitleBox = styled.div`
  width: 137px;
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid blue;
`;

export const InputBox = styled.div`
  width: 671px;
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid orange;
`;

const ProductInput = styled.input`
  width: 506px;
  height: ${props => props.height};
  border: 1px solid purple;
`;
export default RegisterInput;
