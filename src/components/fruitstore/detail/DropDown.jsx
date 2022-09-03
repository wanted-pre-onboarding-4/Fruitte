import { useState } from 'react';
import styled from 'styled-components';
import { Colors } from '../../../styles/Colors';

export default function Dropdown({ options, pick, setPick, setTotalPrice }) {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(prev => !prev);
  };

  const onClickOption = el => () => {
    const temp = [...pick];
    let remove = [];
    remove = temp.find(item => item.option_title === el.option_title);
    if (remove && remove.length !== 0) {
      alert('이미 담은 상품입니다');
      return;
    }
    if (el.is_sold_out) {
      alert('품절된 상품입니다');
      return;
    }
    toggleDropdown();
    toggleDropdown();
    setPick([
      ...pick,
      {
        option_title: el.option_title,
        option_price: el.option_price,
      },
    ]);
    setTotalPrice(prev => prev + el.option_price);
  };
  return (
    <Drop onClick={toggleDropdown} className={isActive ? 'isActive' : ''}>
      <span>필수 선택 (필수)</span>▼
      {isActive && (
        <Option>
          <ul>
            {options.map((el, index) => (
              <li
                key={index}
                onClick={onClickOption(el)}
                className={el.is_sold_out ? 'isSoldOut' : ''}
              >
                <span>{el.option_title}</span>
                <span>{el.option_price.toLocaleString()}원</span>
              </li>
            ))}
          </ul>
        </Option>
      )}
    </Drop>
  );
}

const Drop = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${Colors.GRAY_2};
  padding: 10px 20px;
  color: ${Colors.BLACK};
  cursor: pointer;
  &.isActive {
    border: 1px solid ${Colors.GRAY_1};
    color: ${Colors.BLACK};
  }
`;

const Option = styled.div`
  position: absolute;
  width: 100%;
  left: 0px;
  top: 40px;
  background: ${Colors.WHITE};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
  z-index: 2;
  ul {
    li {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 10px 20px;
      cursor: pointer;
      :hover {
        color: ${Colors.BLACK};
        background-color: rgba(206, 206, 206, 0.3);
      }
      span {
      }
    }
    li.isSoldOut {
      cursor: not-allowed;
    }
  }
`;
