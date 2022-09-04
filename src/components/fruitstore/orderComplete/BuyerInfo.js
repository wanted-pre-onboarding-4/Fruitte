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

const BuyerInfo = () => {
  const [order] = useRecoilState(orderAtom);
  console.log(order);
  return (
    <BuyerInfoWrapper>
      <TableContainer>
        <Table sx={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell colSpan={2}>
                <TableName>구매자 정보</TableName>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {Object.values(order[0].user_info).map(buyerInfo => {
              return (
                <TableRow>
                  <TableCell>
                    <Delivery>
                      <DeleiverStatus>이름</DeleiverStatus>
                    </Delivery>
                  </TableCell>
                  <TableCell align="center">
                    <Delivery>
                      <DeleiverStatus>{order[0].user_info.name}</DeleiverStatus>
                    </Delivery>
                  </TableCell>
                </TableRow>
              );
            })} */}
            <TableRow>
              <TableCell>
                <Delivery>
                  <DeleiverStatus>이름</DeleiverStatus>
                </Delivery>
              </TableCell>
              <TableCell align="center">
                <Delivery>
                  <DeleiverStatus>{order[0].user_info.name}</DeleiverStatus>
                </Delivery>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Delivery>
                  <DeleiverStatus>핸드폰 번호</DeleiverStatus>
                </Delivery>
              </TableCell>
              <TableCell align="center">
                <Delivery>
                  <DeleiverStatus>{order[0].user_info.phone_number}</DeleiverStatus>
                </Delivery>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Delivery>
                  <DeleiverStatus>이메일 주소</DeleiverStatus>
                </Delivery>
              </TableCell>
              <TableCell align="center">
                <Delivery>
                  <DeleiverStatus>{order[0].user_info.email}</DeleiverStatus>
                </Delivery>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </BuyerInfoWrapper>
  );
};

const BuyerInfoWrapper = styled.div``;
const TableName = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #212121;
`;
const Delivery = styled.div`
  font-weight: 600;
  font-size: 18px;
`;
const DeleiverStatus = styled.div`
  font-weight: 600;
  font-size: 18px;
`;

export default BuyerInfo;
