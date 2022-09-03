import React from 'react';
import styled from 'styled-components';
import SaleStateToggleBtn from './SaleStateToggleBtn';

const Li = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 3fr 3fr 3fr 3fr 2fr 2fr 3fr;
  justify-items: center;
  align-items: center;
  border-bottom: 2px solid #c2d1d9;
  padding: 5px 0;
  input {
    width: 20px;
    height: 20px;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const ToggleBtnWrapper = styled.div`
  width: 125px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      <ItemWrapper>{product.product_id}</ItemWrapper>
      <ImageWrapper>
        <img src={product.product_image[0]} />
      </ImageWrapper>
      <ItemWrapper>{product.product_name}</ItemWrapper>
      <ItemWrapper>{product.product_price}</ItemWrapper>
      <ToggleBtnWrapper>
        <SaleStateToggleBtn id={product.product_id} isShown={product.isShown} />
        <span>{product.isShown ? '판매중' : '판매중지'}</span>
      </ToggleBtnWrapper>
      <ItemWrapper>{product.likes}</ItemWrapper>
      <ItemWrapper>{product.product_amount}</ItemWrapper>
      <ItemWrapper>
        <Button>삭제</Button>
      </ItemWrapper>
    </Li>
  );
};

export default TableItem;
