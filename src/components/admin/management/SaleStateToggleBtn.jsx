import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 45px;
  height: 25px;
  border-radius: 15px;
  padding: 1px;
  position: relative;
  background-color: #c3cbcd;
  margin-right: 10px;
`;

const Ball = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 1px 5px rgba(15, 15, 15, 0.6);
  position: absolute;
  left: ${props => (props.isShown ? '' : '3px')};
  right: ${props => (props.isShown ? '3px' : '')};
`;

const SaleStateToggleBtn = ({ isShown }) => {
  return (
    <Container>
      <Ball isShown={isShown} />
    </Container>
  );
};

export default SaleStateToggleBtn;
