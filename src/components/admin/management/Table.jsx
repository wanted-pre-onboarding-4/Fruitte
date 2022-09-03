import React from 'react';
import styled from 'styled-components';
import TableItem from './TableItem';

const Container = styled.ul`
  width: 80vw;
  margin: 0 auto;
`;

const TableHeader = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 3fr 3fr 5fr 1fr 1fr 3fr;
  height: 50px;
  background-color: #f2f5f7;
  border-bottom: 2px solid #c2d1d9;
  border-top: 2px solid #c2d1d9;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Table = ({ productList }) => {
  return (
    <Container>
      <TableHeader>
        <div></div>
        <div>No</div>
        <div>상품 이미지</div>
        <div>상품명</div>
        <div>판매가</div>
        <div>상태</div>
        <div>좋아요</div>
        <div>재고</div>
        <div>상품삭제</div>
      </TableHeader>
      {productList.map(product => (
        <TableItem key={product.product_id} product={product}></TableItem>
      ))}
    </Container>
  );
};

export default Table;
