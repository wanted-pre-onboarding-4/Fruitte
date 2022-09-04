import React from 'react';
import styled from 'styled-components';
import { ProductInputBox, TitleBox, ProductInput } from './RegisterInput';

function TagRegister() {
  return (
    <ProductInputBox height={'114px'}>
      <TitleBox height={'114px'}>{'태그'}</TitleBox>
      <InputBox height={'114px'}>
        <ProductInput height={'31px'}></ProductInput>
        <TagBox></TagBox>
      </InputBox>
    </ProductInputBox>
  );
}

export const InputBox = styled.div`
  width: 671px;
  height: ${props => props.height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid orange;
`;

const TagBox = styled.div`
  width: 506px;
  height: 40px;
  display: flex;
  margin-top: 10px;
  border: 1px solid green;
`;
export default TagRegister;
