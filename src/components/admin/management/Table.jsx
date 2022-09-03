import React, { useCallback, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import productAtom from '../../../store/productAtom';
import TableItem from './TableItem';

const Container = styled.ul`
  width: 80vw;
  margin: 0 auto;
`;

const TableHeader = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 3fr 3fr 3fr 2fr 2fr 3fr;
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

const Button = styled.button`
  background-color: #424b5a;
  padding: 8px 16px;
  color: white;
  &:active {
    transform: scale(0.98);
  }
`;

const Table = ({ productList }) => {
  const [deleteItems, setDeleteItems] = useState([]);
  const setProducts = useSetRecoilState(productAtom);

  const onItemsDeleteClick = useCallback(() => {
    setProducts(prev => prev.filter(product => !deleteItems.includes(product.product_id)));
  }, [deleteItems]);

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
        <TableItem
          setDeleteItems={setDeleteItems}
          key={product.product_id}
          product={product}
        ></TableItem>
      ))}
      <Button onClick={onItemsDeleteClick}>전체 삭제</Button>
    </Container>
  );
};

export default Table;
