import React, { useState } from 'react';
import RegisterInput from './RegisterInput';
import RegisterOption from './RegisterOption';
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

  const handleTagAdd = e => {
    setProductInfo(cur => {
      const newProductInfo = { ...cur };
      newProductInfo[e.target.name].push(e.target.value);
      return newProductInfo;
    });
  };

  const handleTagDelete = e => {
    setProductInfo(cur => {
      const newProductInfo = { ...cur };
      newProductInfo.product_tags = newProductInfo.product_tags.filter(
        tag => e.target.name !== tag
      );
      return newProductInfo;
    });
  };

  const handleOptionAdd = data => {
    setProductInfo(cur => {
      const newProductInfo = { ...cur };
      newProductInfo.product_options.push(data);
      return newProductInfo;
    });
  };

  const handleOptionDelete = e => {
    setProductInfo(cur => {
      const newProductInfo = { ...cur };
      newProductInfo.product_options = newProductInfo.product_options.filter(
        option => option.option_title !== e.target.name
      );
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
      <RegisterOption
        handleOptionAdd={handleOptionAdd}
        productOption={productInfo.product_options}
        handleOptionDelete={handleOptionDelete}
      ></RegisterOption>
      <RegisterInput
        boxTitle={'상품설명'}
        boxHeight={'135px'}
        inputHeight={'102px'}
        productKey={'prdocut_description'}
        productValue={productInfo.prdocut_description}
        handleOnChange={handleOnChange}
      ></RegisterInput>
      <TagRegister
        handleTagAdd={handleTagAdd}
        productKey={'product_tags'}
        product_tags={productInfo.product_tags}
        handleTagDelete={handleTagDelete}
      ></TagRegister>
    </ProductForm>
  );
}

const ProductForm = styled.form`
  width: 755px;
  height: auto;
  display: flex;
  flex-direction: column;
  border: 1px solid #c2d1d9;
`;

export default RegisterInfo;
