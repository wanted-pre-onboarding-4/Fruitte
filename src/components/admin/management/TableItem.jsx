import React from 'react';
import styled from 'styled-components';
import SaleStateToggleBtn from './SaleStateToggleBtn';

const Li = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 3fr 3fr 5fr 1fr 1fr 3fr;
  justify-items: center;
  align-items: center;
  border-bottom: 2px solid #c2d1d9;
  padding: 5px 0;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 20px;
    height: 20px;
  }
`;

const ImageWrapper = styled.div`
  width: 100px;
  height: 70px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Button = styled.button`
  background-color: #424b5a;
  padding: 8px 16px;
  color: white;
`;

const TableItem = ({ product }) => {
  return (
    <Li>
      <input type="checkbox" />
      <div>{product.product_id}</div>
      <ImageWrapper>
        <img src={product.product_image[0]} />
      </ImageWrapper>
      <div>{product.product_name}</div>
      <div>{product.product_price}</div>
      <div>
        <SaleStateToggleBtn isShown={product.isShown} />
        <span>{product.isShown ? '판매중' : '판매중지'}</span>
      </div>
      <div>{product.likes}</div>
      <div>{product.product_amount}</div>
      <div>
        <Button>삭제</Button>
      </div>
    </Li>
  );
};

export default TableItem;
