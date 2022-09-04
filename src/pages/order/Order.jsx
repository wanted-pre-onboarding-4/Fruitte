import React from 'react';
import styled from 'styled-components';
import OrderList from '../../components/fruitstore/order/OrderList';
import OrderInfo from '../../components/fruitstore/order/OrderInfo';
const DUMMY_PRODUCT = {
  order_id: 1,
  product_image: 'https://cdn.imweb.me/thumbnail/20200715/53fa50226803f.jpg',
  product_name: '슈퍼콜라겐 에센스 28일',
  product_amount: 1,
  product_price: 96000,
  discount_rate: 1000,
  delivery_fee: 1000,
};

const Order = () => {
  return (
    <Main>
      <OrderList data={DUMMY_PRODUCT} />
      <OrderInfo data={DUMMY_PRODUCT} />
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
