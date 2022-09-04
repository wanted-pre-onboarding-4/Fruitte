import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './order_info/CustomerInfo';
import { Section, SectionTitle } from './OrderInfo';

const OrderList = ({
  totalAmount,
  discount,
  resultPrice,
  data: { product_name, product_image, delivery_fee, product_id, options },
}) => {
  return (
    <Container>
      <Section>
        <SectionTitle>주문결제</SectionTitle>
        <Wrapper>
          <Message>주문하실 상품명 및 수량을 정확하게 확인해 주세요</Message>
          <ListNavWrapper>
            <ListNav>
              <NavItem flex={0.5}>상품명</NavItem>
              <NavItem flex={0.1}>배송비</NavItem>
              <NavItem flex={0.05}>수량</NavItem>
              <NavItem flex={0.125}>할인</NavItem>
              <NavItem flex={0.225}>합계(할인포함)</NavItem>
            </ListNav>
          </ListNavWrapper>
          <ProductInfo key={product_id}>
            <ProductImageAndDes>
              <img src={product_image[0]} alt="상품 이미지" />
              <div>
                <p>{product_name}</p>
                {options.map(option => (

                  <Option key={option.title}>
                    상품선택: {option.option_title} {option.option_amount}개 +({option.option_price}
                    )
                  </Option>
                ))}
              </div>
            </ProductImageAndDes>
            <ResponsiveWrapper>
              <ProductDeliveryFee>
                <p>
                  {delivery_fee === 0
                    ? '무료'
                    : `${delivery_fee.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}
                </p>
              </ProductDeliveryFee>
              <ProductAmount>
                <p>{totalAmount}개</p>
              </ProductAmount>
              <ProductDiscount>
                {discount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원
              </ProductDiscount>
              <ProductTotalPrice>
                <p>{resultPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
              </ProductTotalPrice>
            </ResponsiveWrapper>
          </ProductInfo>
        </Wrapper>
      </Section>
    </Container>
  );
};

export default OrderList;

const Container = styled.div`
  margin-bottom: 2em;
`;

const Message = styled.p`
  color: #b4b2b2;
  font-size: 1rem;
  margin: 1em 0;
`;

const ListNavWrapper = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const ListNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em;
  border-bottom: 1px solid #dddddd;
`;
const NavItem = styled.li`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  font-weight: 600;
  align-items: center;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    max-width: 320px;
  }
`;

const ProductImageAndDes = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1em;
  flex: 0.5;
  img {
    object-fit: cover;
    max-width: 100px;
    max-height: 75px;
    height: 100%;
    width: 100%;
    border-radius: 5px;
  }
  div {
    display: flex;
    flex-direction: column;
    row-gap: 0.25em;
  }
`;

const ProductDeliveryFee = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  row-gap: 0.25em;
  del {
    color: #ddd;
  }
`;

const ProductAmount = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: center;
`;

const ProductDiscount = styled.div`
  display: flex;
  flex: 1.25;
  justify-content: center;
`;

const ProductTotalPrice = styled.div`
  display: flex;
  flex: 2.25;
  justify-content: center;
`;

const Option = styled.p`
  font-size: 0.8rem;
  color: #aaa9a9;
`;
