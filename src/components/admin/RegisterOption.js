import React, { useState } from 'react';
import styled from 'styled-components';
import { ProductInputBox, TitleBox } from './RegisterInput';

function RegisterOption({ handleOptionAdd, productOption, handleOptionDelete }) {
  const [option, setOption] = useState({
    option_title: '',
    option_price: 0,
    is_sold_out: false,
  });

  const handleOnChange = e => {
    setOption(cur => {
      const newOption = { ...cur };
      if (e.target.name === 'option_price') {
        newOption[e.target.name] = parseInt(e.target.value);
      } else {
        newOption[e.target.name] = e.target.value;
      }
      return newOption;
    });
  };

  const AddOption = () => {
    handleOptionAdd(option);
    setOption({
      option_title: '',
      option_price: 0,
      is_sold_out: false,
    });
  };
  return (
    <ProductInputBox height={'auto'}>
      <TitleBox height={'auto'}>{'옵션'}</TitleBox>
      <OptionContentBox>
        <OptionInputBox>
          <div>
            무게 :{' '}
            <OptionInput
              type="text"
              name="option_title"
              value={option.option_title}
              onChange={handleOnChange}
            ></OptionInput>
          </div>
          <div>
            가격 :{' '}
            <OptionInput
              type="text"
              name="option_price"
              value={option.option_price}
              onChange={handleOnChange}
            ></OptionInput>
          </div>
          <OptionAddButton type="button" onClick={AddOption}>
            추가
          </OptionAddButton>
        </OptionInputBox>
        <OptionList>
          {productOption.map(option => (
            <OptionText key={option.option_title}>
              {`무게 : ${option.option_title}kg  가격 : ${option.option_price}`}
              <OptionDeleteButton
                type="button"
                name={option.option_title}
                onClick={handleOptionDelete}
              >
                X
              </OptionDeleteButton>
            </OptionText>
          ))}
        </OptionList>
      </OptionContentBox>
    </ProductInputBox>
  );
}

const OptionInputBox = styled.div`
  width: 624px;
  height: 45px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #c2d1d9;
`;

const OptionInput = styled.input`
  width: 150px;
  height: 31px;
  border: 1px solid #c2d1d9;
`;

const OptionAddButton = styled.button`
  width: 50px;
  height: 31px;
  background-color: skyblue;
`;

const OptionList = styled.div`
  width: 624px;
  height: auto;
  display: flex;
  flex-wrap: wrap;
`;

const OptionText = styled.div`
  width: 300px;
  height: 30px;
  display: flex;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  background-color: gainsboro;
  border-radius: 5px;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const OptionContentBox = styled.div`
  width: 671px;
  display: flex;
  flex-direction: column;
`;

const OptionDeleteButton = styled.button`
  height: 25px;
  margin-left: 10px;
  margin-right: 10px;
  font-weight: bold;
  font-size: 20px;
`;

export default RegisterOption;
