import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PaymentAmount = ({
  data,
  totalPrice,
  discount,
  resultPrice,
  paymentWay,
  userInfo,
  deliveryInfo,
}) => {
  const navigate = useNavigate();

  const orderHandler = () => {
    const sendData = {
      ...data,
      payment_way: paymentWay,
      user_info: {
        ...userInfo,
      },
      delivery_info: {
        ...deliveryInfo,
      },
    };
    navigate('/shop_payment/complete', { state: sendData });
  };

  return (
    <Wrapper>
      <List>
        <ListItem>
          <ListName>상품금액 합계</ListName>
          <ListPrice color="#000" weight={600}>
            {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </ListPrice>
        </ListItem>
        <ListItem>
          <ListName>할인금액 합계</ListName>
          <ListPrice>-{discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</ListPrice>
        </ListItem>
        <ListItem>
          <ListName>배송비 합계</ListName>
          <ListPrice>
            +{data.delivery_fee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </ListPrice>
        </ListItem>
        <hr />
        <ListItem>
          <ListName>총합계</ListName>
          <ListPrice color="#000" weight={600}>
            {resultPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </ListPrice>
        </ListItem>
        <hr />
        <ListItem>
          <ListName size={'1.2rem'}>최종 결제금액</ListName>
          <ListPrice color="#FF0000" weight={600} size={'1.4rem'}>
            {resultPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
          </ListPrice>
        </ListItem>
      </List>
      <Button type="button" onClick={orderHandler}>
        결제하기 <span>({resultPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')})</span>
      </Button>
    </Wrapper>
  );
};

export default PaymentAmount;

const Wrapper = styled.div`
  display: grid;
  row-gap: 2em;
`;

const List = styled.ul`
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  background-color: #f7f7f7;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  color: #666666;
`;

const ListName = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  font-size: ${({ size }) => size && size};
`;
const ListPrice = styled.span`
  color: ${({ color }) => color && color};
  font-weight: ${({ weight }) => weight && weight};
  font-size: ${({ size }) => size && size};
`;

const Button = styled.button`
  border-radius: 5px;
  background-color: #333;
  color: #fff;
  span {
    color: #ddd;
  }
  font-size: 1.2rem;
  padding: 1.5em;
  width: 100%;
`;
