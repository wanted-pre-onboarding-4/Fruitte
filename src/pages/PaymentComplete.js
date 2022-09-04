import React from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PaymentCompleteSection from '../components/fruitstore/orderComplete/PaymentCompletSection';
import BuyerInfo from '../components/fruitstore/orderComplete/BuyerInfo';
import RecieverInfo from '../components/fruitstore/orderComplete/ RecieverInfo';
const PaymentComplet = () => {
  const navigate = useNavigate();

  const goToPrevPage = () => {
    navigate(-1);
  };

  const getRandomDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = Math.floor(date.getDate() - Math.random() * 20);
    let OrderedDay;
    if (day > 0) {
      OrderedDay = `${year}-${month}-${day}`;
    } else if (day < 0) {
      OrderedDay = `${year}-${month}${day}`;
    }
    return OrderedDay;
  };

  return (
    <>
      <PaymentCompleteWrapper>
        <PaymentCompleteContents>
          <PaymentCompletHeader>
            <Title>
              <ArrowBackIcon fontSize="small" onClick={goToPrevPage} />
              <PageName>주문 상세 내역</PageName>
            </Title>
          </PaymentCompletHeader>
          <PaymentCompleteSection getRandomDate={getRandomDate}></PaymentCompleteSection>
          <DeliveryInfo>
            <BuyerInfo></BuyerInfo>
            <RecieverInfo></RecieverInfo>
          </DeliveryInfo>
        </PaymentCompleteContents>
      </PaymentCompleteWrapper>
    </>
  );
};
const PaymentCompleteWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #f3f3f3;
`;

const PaymentCompleteContents = styled.div`
  width: 1220px;
  padding: 20px 20px;
`;
const PaymentCompletHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 20px 18px 10px;
  margin: 20px 0;
`;

const Title = styled.div`
  display: flex;
  color: #212121;
`;
const PageName = styled.h2`
  margin-top: 2px;
  padding-left: 10px;
  font-size: 20px;
`;
const DeliveryInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default PaymentComplet;
