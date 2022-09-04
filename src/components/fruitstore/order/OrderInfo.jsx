import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import CustomerInfo from './order_info/CustomerInfo';
import PaymentAmount from './order_info/PaymentAmount';
import PaymentMethod from './order_info/PaymentMethod';
import ShippingInfo from './order_info/ShippingInfo';

const OrderInfo = ({ data }) => {
  const [paymentWay, setPaymentWay] = useState('');
  const [userInfo, setUserInfo] = useState({
    name: '',
    phone_number: '',
    email: '',
  });
  const [deliveryInfo, setDeliveryInfo] = useState({
    post_number: '',
    address: '',
    detail_address: '',
  });
  const getPaymentWay = useCallback(way => {
    setPaymentWay(way);
  }, []);

  const getUserInfo = useCallback(userInfo => {
    setUserInfo({ ...userInfo });
  }, []);

  const getDeliveryInfo = useCallback(deliveryInfo => {
    setDeliveryInfo({ ...deliveryInfo });
  }, []);

  return (
    <Container>
      <Info>
        <Section>
          <SectionTitle>주문고객정보</SectionTitle>
          <CustomerInfo onGetUsetInfo={getUserInfo} />
        </Section>
        <Section>
          <SectionTitle>배송정보</SectionTitle>
          <ShippingInfo onGetDeliveryInfo={getDeliveryInfo} />
        </Section>
        <Section>
          <SectionTitle>결제수단</SectionTitle>
          <PaymentMethod onGetPaymentWay={getPaymentWay} />
        </Section>
      </Info>
      <Amount>
        <Section>
          <SectionTitle>결제금액</SectionTitle>
          <PaymentAmount
            data={data}
            paymentWay={paymentWay}
            userInfo={userInfo}
            deliveryInfo={deliveryInfo}
          />
        </Section>
      </Amount>
    </Container>
  );
};

export default OrderInfo;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    column-gap: 3em;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  flex: 0.6;
`;
const Amount = styled.div`
  display: flex;
  flex: 0.4;
  align-items: flex-start;
`;

export const Section = styled.section`
  display: grid;
  width: 100%;
`;

export const SectionTitle = styled.h2`
  font-size: 1.35rem;
  font-weight: 600;
  border-bottom: 2px solid #000;
  padding-bottom: 1.2em;
`;
