import React, { useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import Table from '../../components/admin/management/Table';
import productAtom from '../../store/productAtom';
import Pagination from '../../components/commons/Pagination';

const Container = styled.div`
  width: 100%;
`;

const Header = styled.h1`
  width: 100%;
  height: 80px;
  background-color: white;
  font-size: x-large;
  font-weight: bolder;
  display: flex;
  align-items: center;
  padding-left: 9.5vw;
`;

const InnerContainer = styled.div`
  margin: 50px auto;
  width: 80vw;
`;

const InnerHeader = styled.h2`
  font-size: large;
  margin: 15px 0;
`;

const AuthManagement = () => {
  const products = useRecoilValue(productAtom);
  const [page, setPage] = useState(1);
  return (
    <Container>
      <Header>상품 관리</Header>
      <InnerContainer>
        <InnerHeader>상품 기본정보</InnerHeader>
        <Table productList={products.slice(5 * (page - 1), page * 5)}></Table>
      </InnerContainer>
      <Pagination total={products.length} limit={5} page={page} setPage={setPage} />
    </Container>
  );
};

export default AuthManagement;
