import styled from 'styled-components';
import { useState } from 'react';
import { Colors } from '../../../styles/Colors';

export default function SelectItem({ item, setTotalPrice, setPick, pick, index }) {
  const [option, setOption] = useState({
    amount: 1,
    price: item.option_price,
  });

  const temp = [...pick];

  const onClickMinus = () => {
    if (option.amount === 1) {
      alert('최소 주문 수량은 1개입니다');
      return;
    }
    temp[index].option_amount = temp[index].option_amount - 1;
    setPick(temp);
    setOption({
      amount: option.amount - 1,
      price: Number(item.option_price) * (option.amount - 1),
    });
    setTotalPrice(prev => prev - Number(item.option_price));
  };

  const onClickPlus = () => {
    temp[index].option_amount = temp[index].option_amount + 1;
    setPick(temp);
    setOption({
      amount: option.amount + 1,
      price: Number(item.option_price) * (option.amount + 1),
    });
    setTotalPrice(prev => prev + Number(item.option_price));
  };

  const onClickDelete = item => {
    setPick(prev => prev.filter(el => el.option_title !== item.option_title));
    setTotalPrice(prev => prev - Number(item.option_price) * option.amount);
  };

  return (
    <Wrap>
      <Selected>
        <SelectedOption>{item.option_title}</SelectedOption>
        <DeleteOption
          onClick={() => {
            onClickDelete(item);
          }}
        >
          X
        </DeleteOption>
      </Selected>
      <Price>
        <ButtonWrap>
          <button onClick={onClickMinus}>----</button>
          <span>{option.amount}</span>
          <button onClick={onClickPlus}>+++++</button>
        </ButtonWrap>
        <TotalPrice>{option.price}</TotalPrice>
      </Price>
    </Wrap>
  );
}

const Wrap = styled.div`
  background-color: rgba(51, 51, 51, 0.05);
  padding: 15px;
  margin-bottom: 10px;
`;

const Selected = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed ${Colors.GRAY_3};
  padding-bottom: 10px;
`;

const SelectedOption = styled.div``;

const DeleteOption = styled.div`
  cursor: pointer;
`;

const Price = styled.div``;

const ButtonWrap = styled.div``;

const TotalPrice = styled.div``;
