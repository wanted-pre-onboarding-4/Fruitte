import React, { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import productAtom from '../../../store/productAtom';

const Container = styled.div`
  width: 45px;
  height: 25px;
  border-radius: 15px;
  padding: 1px;
  position: relative;
  background-color: #c3cbcd;
  display: flex;
  align-items: center;
`;

const Ball = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0px 1px 5px rgba(15, 15, 15, 0.6);
  position: absolute;
  left: ${props => (props.isShown ? '3px' : 'unset')};
  right: ${props => (props.isShown ? 'unset' : '3px')};
`;

const SaleStateToggleBtn = ({ id, isShown }) => {
  const setProducts = useSetRecoilState(productAtom);

  const onClick = useCallback(() => {
    setProducts(prev =>
      prev.map(product => (product.product_id === id ? { ...product, isShown: !isShown } : product))
    );
  }, [isShown]);

  return (
    <Container onClick={onClick}>
      <Ball isShown={isShown} />
    </Container>
  );
};

export default SaleStateToggleBtn;
