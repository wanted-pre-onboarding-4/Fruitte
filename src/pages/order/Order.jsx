import React from 'react';
import styled from 'styled-components';
import OrderList from '../../components/fruitstore/order/OrderList';
import OrderInfo from '../../components/fruitstore/order/OrderInfo';
import { useLocation } from 'react-router-dom';

const Order = () => {
  const { state } = useLocation();

  const totalAmount = state.options.reduce((pre, cur) => pre + cur.option_amount, 0);
  const totalPrice = state.options.reduce(
    (pre, cur) => pre + cur.option_amount * cur.option_price,
    0
  );
  const discount = (totalPrice * state.discount_rate) / 100;
  const resultPrice = totalPrice - discount + state.delivery_fee;
  return (
    <Main>
      <OrderList
        data={state}
        totalAmount={totalAmount}
        totalPrice={totalPrice}
        discount={discount}
        resultPrice={resultPrice}
      />
      <OrderInfo
        data={state}
        totalAmount={totalAmount}
        totalPrice={totalPrice}
        discount={discount}
        resultPrice={resultPrice}
      />
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
