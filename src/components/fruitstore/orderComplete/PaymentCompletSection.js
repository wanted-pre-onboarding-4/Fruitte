import React from 'react';

import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const PaymentCompletSection = ({
  getRandomDate,
  deliveryFee,
  discountRate,
  orderId,
  paymentWay,
  productAmount,
  productiImage,
  productName,
  productpPrice,
}) => {
  return (
    <OrderProductInfo>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <OrderInfoContents> 상품 정보</OrderInfoContents>
              </TableCell>

              <TableCell align="center">
                <OrderInfoContents>배송 정보</OrderInfoContents>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                <OrderProductDetailContents>
                  <ImageWrapper>
                    <OrderProductImage src={productiImage}></OrderProductImage>
                  </ImageWrapper>
                  <OrderProductText>
                    <OrderProductDetailInfo>
                      <OrderInfo>
                        주문번호 <OrderInfoBold>{orderId}</OrderInfoBold>
                      </OrderInfo>
                      <OrderInfo>
                        주문날짜<OrderInfoBold>{getRandomDate()}</OrderInfoBold>
                      </OrderInfo>
                    </OrderProductDetailInfo>
                    <OrderProductDetailInfo>
                      <ProductName>{productName}</ProductName>
                    </OrderProductDetailInfo>
                    <OrderPriceQuantity>
                      <PrevPrice>{productpPrice}원</PrevPrice>
                      <CurrPrice>{productpPrice - discountRate}원</CurrPrice>/ 수량 {productAmount}
                      개
                    </OrderPriceQuantity>
                  </OrderProductText>
                </OrderProductDetailContents>
              </TableCell>

              <TableCell align="center">
                <Delivery>
                  <DeleiverStatus>배송완료</DeleiverStatus>
                  <DeliveryInfo>배송비 / {deliveryFee}원</DeliveryInfo>
                </Delivery>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <TableFooterContents>결제 정보</TableFooterContents>
              </TableCell>
              <TableCell align="center">
                <ProductPriceInfo>
                  <ProductPrice>
                    <InfoBold>{productpPrice}</InfoBold>
                    상품가격
                  </ProductPrice>
                  <AddIcon />
                  <DeliveryPrice>
                    <InfoBold>{deliveryFee}</InfoBold>
                    배송비
                  </DeliveryPrice>
                  <ArrowRightAltIcon />
                  <TotalPrice>
                    <InfoBold>{productpPrice + deliveryFee}</InfoBold>
                    {paymentWay} 결제
                  </TotalPrice>
                </ProductPriceInfo>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </OrderProductInfo>
  );
};
const OrderProductInfo = styled.div`
  margin-bottom: 50px;
`;

const InfoBold = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

const OrderInfoContents = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #212121;
`;

const OrderProductDetailContents = styled.div`
  display: flex;
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin-right: 20px;
`;
const OrderProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(50, 50);
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: auto;
`;
const OrderProductText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const OrderProductDetailInfo = styled.div`
  display: flex;
  align-items: center;
`;
const OrderInfo = styled.div`
  display: flex;
  margin-right: 20px;
`;
const OrderInfoBold = styled.h3`
  margin-left: 8px;
  font-weight: 500;
  font-size: 14px;
`;

const ProductName = styled.div`
  margin-right: 10px;
  font-weight: 600;
  font-size: 18px;
`;
const OrderPriceQuantity = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
`;

const DeliveryInfo = styled.div``;

const Delivery = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DeleiverStatus = styled.div`
  font-weight: 600;
  font-size: 18px;
`;

const PrevPrice = styled.div`
  margin-right: 10px;
  text-decoration: line-through;
`;
const CurrPrice = styled.div`
  margin-right: 6px;
`;

const TableFooterContents = styled.div`
  font-weight: 600;
  font-size: 18px;
`;

const TotalPrice = styled.div``;
const ProductPrice = styled.div``;
const DeliveryPrice = styled.div``;

const ProductPriceInfo = styled.div`
  justify-content: center;

  display: flex;
`;
export default PaymentCompletSection;
