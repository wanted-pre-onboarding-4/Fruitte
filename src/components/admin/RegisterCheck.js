import React from 'react';
import styled from 'styled-components';
import { ProductInputBox, TitleBox, InputBox } from './RegisterInput';

function RegisterCheck() {
  return (
    <ProductInputBox height={'67px'}>
      <TitleBox height={'67px'}>{'옵션'}</TitleBox>
      <InputBox height={'67px'}>
        <ChcekBoxDiv>
          <OptionCheck type="checkbox"></OptionCheck>옵션 1
        </ChcekBoxDiv>
        <ChcekBoxDiv>
          <OptionCheck type="checkbox"></OptionCheck>옵션 2
        </ChcekBoxDiv>
      </InputBox>
    </ProductInputBox>
  );
}

const OptionCheck = styled.input``;

const ChcekBoxDiv = styled.div`
  display: flex;
  margin-right: 50px;
`;

export default RegisterCheck;
