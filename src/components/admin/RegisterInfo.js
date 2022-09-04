import React, { useState } from 'react';
import RegisterInput from './RegisterInput';
import RegisterCheck from './RegisterCheck';
import TagRegister from './TagRegister';
import styled from 'styled-components';

function RegisterInfo() {
  const [productInfo, setProductInfo] = useState({
    product_name: '',
    product_price: 0,
    discount_rate: 0,
    product_amount: 0,
    prdocut_description: '',
    product_tags: [],
    product_options: [],
  });

  const handleOnChange = e => {
    setProductInfo(cur => {
      const newProductInfo = { ...cur };
      if (e.target.name !== 'product_name' && e.target.name !== 'prdocut_description')
        newProductInfo[e.target.name] = parseInt(e.target.value);
      else newProductInfo[e.target.name] = e.target.value;
      return newProductInfo;
    });
  };

  return (
    <ProductForm>
      <RegisterInput
        boxTitle={'상품명'}
        boxHeight={'67px'}
        inputHeight={'31px'}
        productKey={'product_name'}
        productValue={productInfo.product_name}
        handleOnChange={handleOnChange}
      ></RegisterInput>
      <RegisterInput
        boxTitle={'판매가'}
        boxHeight={'67px'}
        inputHeight={'31px'}
        productKey={'product_price'}
        productValue={productInfo.product_price}
        handleOnChange={handleOnChange}
      ></RegisterInput>
      <RegisterInput
        boxTitle={'할인률'}
        boxHeight={'67px'}
        inputHeight={'31px'}
        productKey={'discount_rate'}
        productValue={productInfo.discount_rate}
        handleOnChange={handleOnChange}
      ></RegisterInput>
      <RegisterInput
        boxTitle={'재고수량'}
        boxHeight={'67px'}
        inputHeight={'31px'}
        productKey={'product_amount'}
        productValue={productInfo.product_amount}
        handleOnChange={handleOnChange}
      ></RegisterInput>
      <RegisterCheck></RegisterCheck>
      <RegisterInput
        boxTitle={'상품설명'}
        boxHeight={'135px'}
        inputHeight={'102px'}
        productKey={'prdocut_description'}
        productValue={productInfo.prdocut_description}
        handleOnChange={handleOnChange}
      ></RegisterInput>
      <TagRegister></TagRegister>
    </ProductForm>
  );
}

const ProductForm = styled.form`
  width: 755px;
  height: 584px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export default RegisterInfo;
