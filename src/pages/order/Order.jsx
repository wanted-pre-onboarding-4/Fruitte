import React from 'react';
import styled from 'styled-components';
import OrderList from '../../components/fruitstore/order/OrderList';
import OrderInfo from '../../components/fruitstore/order/OrderInfo';
import { useLocation } from 'react-router-dom';

const Order = () => {
  const { state } = useLocation();
  return (
    <Main>
      <OrderList data={state} />
      <OrderInfo data={state} />
    </Main>
  );
};

export default Order;

const Main = styled.main`
  padding: 3em 1em;
  width: 100%;
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    margin: 0 auto;
  }
`;
