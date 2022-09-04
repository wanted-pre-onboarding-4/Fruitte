import React from 'react';
import styled from 'styled-components';

function RegisterInput({
  boxTitle,
  boxHeight,
  inputHeight,
  handleOnChange,
  productKey,
  productValue,
}) {
  return (
    <ProductInputBox height={boxHeight}>
      <TitleBox height={boxHeight}>{boxTitle}</TitleBox>
      <InputBox height={boxHeight}>
        <ProductInput
          type="text"
          height={inputHeight}
          name={productKey}
          value={productValue}
          onChange={handleOnChange}
        ></ProductInput>
      </InputBox>
    </ProductInputBox>
  );
}

export const ProductInputBox = styled.div`
  width: 754px;
  height: ${props => props.height};
  display: flex;
  border-bottom: 1px solid #c2d1d9;
`;

export const TitleBox = styled.div`
  width: 137px;
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f5f7;
  border-bottom: 1px solid #c2d1d9;
`;

export const InputBox = styled.div`
  width: 671px;
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductInput = styled.input`
  width: 506px;
  height: ${props => props.height};
  border: 1px solid #c2d1d9;
`;
export default RegisterInput;
