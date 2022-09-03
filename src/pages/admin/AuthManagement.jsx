import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import Table from '../../components/admin/management/Table';
import productAtom from '../../store/productAtom';

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
  const [products, setProducts] = useRecoilState(productAtom);
  console.log(setProducts);
  return (
    <Container>
      <Header>상품 관리</Header>
      <InnerContainer>
        <InnerHeader>상품 기본정보</InnerHeader>
        <Table productList={products.slice(0, 5)}></Table>
      </InnerContainer>
    </Container>
  );
};

export default AuthManagement;
