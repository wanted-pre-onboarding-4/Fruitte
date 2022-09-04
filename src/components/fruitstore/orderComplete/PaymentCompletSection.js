import React from 'react';
import orderAtom from '../../../store/orderAtom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
// import Paper from '@mui/material/Paper';

const PaymentCompletSection = ({ getRandomDate }) => {
  const [order] = useRecoilState(orderAtom);

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
            {order.map(order => (
              <TableRow key={order.order_id}>
                <TableCell component="th" scope="row">
                  <OrderProductDetailContents>
                    <ImageWrapper>
                      <OrderProductImage src={order.product_image}></OrderProductImage>
                    </ImageWrapper>
                    <OrderProductText>
                      <OrderProductDetailInfo>
                        <OrderInfo>
                          주문번호 <OrderInfoBold>{order.order_id}</OrderInfoBold>
                        </OrderInfo>
                        <OrderInfo>
                          주문날짜<OrderInfoBold>{getRandomDate()}</OrderInfoBold>
                        </OrderInfo>
                      </OrderProductDetailInfo>
                      <OrderProductDetailInfo>
                        <ProductName>{order.product_name}</ProductName>
                        {order.prdocut_description}
                      </OrderProductDetailInfo>
                      <OrderPriceQuantity>
                        <PrevPrice>{order.product_price}원</PrevPrice>
                        <CurrPrice>
                          {order.product_price - (order.product_price * order.discount_rate) / 100}
                          원
                        </CurrPrice>
                        / 수량 {order.product_amount}개
                      </OrderPriceQuantity>
                    </OrderProductText>
                  </OrderProductDetailContents>
                </TableCell>

                <TableCell align="center">
                  <Delivery>
                    <DeleiverStatus>배송완료</DeleiverStatus>
                    <DeliveryInfo>
                      {order.payment_way} / {order.delivery_fee}원
                    </DeliveryInfo>
                    <Button
                      size="small"
                      style={{
                        maxWidth: '100px',
                      }}
                    >
                      재구매
                    </Button>
                  </Delivery>
                </TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell>
                <TableFooterContents> 결제 정보</TableFooterContents>
              </TableCell>
              <TableCell>
                <CalcPrice>
                  <InfoBold>ㅇㅇㅇㅇㅇ</InfoBold>
                  <InfoBold>ㅇㅇㅇㅇㅇ</InfoBold>
                </CalcPrice>
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
  margin-left: 8px;
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

const CalcPrice = styled.div`
  display: flex;
`;

export default PaymentCompletSection;
