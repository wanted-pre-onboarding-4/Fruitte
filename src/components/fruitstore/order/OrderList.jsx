import React from 'react';
import styled from 'styled-components';
import { Wrapper } from './order_info/CustomerInfo';
import { Section, SectionTitle } from './OrderInfo';

const OrderList = ({
  data: { product_name, product_amount, product_price, discount_rate, product_image, delivery_fee },
}) => {
  const totalPrice = (product_price * product_amount - delivery_fee)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <Container>
      <Section>
        <SectionTitle>주문결제</SectionTitle>
        <Wrapper>
          <Message>주문하실 상품명 및 수량을 정확하게 확인해 주세요</Message>
          <ListNavWrapper>
            <ListNav>
              <NavItem flex={0.7}>상품명</NavItem>
              <NavItem flex={0.1}>가격</NavItem>
              <NavItem flex={0.1}>수량</NavItem>
              <NavItem flex={0.1}>합계</NavItem>
            </ListNav>
          </ListNavWrapper>
          <ProductInfo>
            <ProductImageAndDes>
              <img src={product_image} alt="상품 이미지" />
              <p>{product_name}</p>
            </ProductImageAndDes>
            <ResponsiveWrapper>
              <ProductPrice>
                <p>
                  {(product_price - discount_rate).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  원
                </p>
                <del>
                  <p>{product_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</p>
                </del>
              </ProductPrice>
              <ProductAmount>
                <p>{product_amount}개</p>
              </ProductAmount>
              <ProductTotalPrice>
                <p>{totalPrice}원</p>
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
  flex: 0.3;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    max-width: 320px;
  }
`;

const ProductImageAndDes = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1em;
  flex: 0.7;
  img {
    object-fit: cover;
    max-width: 100px;
    max-height: 75px;
    height: 100%;
    width: 100%;
    border-radius: 5px;
  }
`;

const ProductPrice = styled.div`
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
  flex: 1;
  justify-content: center;
`;

const ProductTotalPrice = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
`;
