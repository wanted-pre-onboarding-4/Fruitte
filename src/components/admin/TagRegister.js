import React, { useState } from 'react';
import styled from 'styled-components';
import { ProductInputBox, TitleBox, ProductInput } from './RegisterInput';

function TagRegister({ productKey, handleTagAdd, product_tags, handleTagDelete }) {
  const [tagName, setTagName] = useState('');

  const handleOnChange = e => {
    setTagName(() => {
      return e.target.value;
    });
  };

  const AddTag = e => {
    if (window.event.keyCode === 13) {
      handleTagAdd(e);
      setTagName('');
    }
  };

  return (
    <ProductInputBox height={'114px'}>
      <TitleBox height={'114px'}>{'태그'}</TitleBox>
      <InputBox height={'114px'}>
        <ProductInput
          height={'31px'}
          name={productKey}
          onKeyUp={AddTag}
          value={tagName}
          onChange={handleOnChange}
        ></ProductInput>
        <TagBox>
          {product_tags.map((tag, idx) => (
            <TagElement key={idx}>
              {tag}
              <TagDeleteButton type="button" name={tag} onClick={handleTagDelete}>
                X
              </TagDeleteButton>
            </TagElement>
          ))}
        </TagBox>
      </InputBox>
    </ProductInputBox>
  );
}

export const InputBox = styled.div`
  width: 671px;
  height: ${props => props.height};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TagBox = styled.div`
  width: 506px;
  height: 40px;
  display: flex;
  align-items: center;
  margin-top: 10px;
  border: 1px solid #c2d1d9;
`;

const TagElement = styled.div`
  width: auto;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  background-color: skyblue;
  margin-left: 5px;
  padding-left: 10px;
`;

const TagDeleteButton = styled.button`
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
`;

export default TagRegister;
