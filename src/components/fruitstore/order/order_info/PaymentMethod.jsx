import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const PAYMENT_TYPE = [
  { id: 'card', name: 'payment', text: '신용카드' },
  { id: 'bank', name: 'payment', text: '실시간 계좌이체' },
  { id: 'pay', name: 'payment', text: '네이버페이' },
];

const CARD_TYPE = ['삼성', '현대', '비씨', '기업', '국민'];

const PaymentMethod = ({ onGetPaymentWay }) => {
  const [selectedPayment, setSelectedPayment] = useState('');

  useEffect(() => {
    onGetPaymentWay(selectedPayment);
  }, [onGetPaymentWay, selectedPayment]);

  let content = (
    <>
      <Cards>
        <label htmlFor="cards">카드선택</label>
        <select name="card" id="cards">
          <option value="">카드선택</option>
          {CARD_TYPE.map((card, idx) => (
            <option value={card} key={idx}>
              {card}
            </option>
          ))}
        </select>
      </Cards>
      <p>
        저희 사이트는 고객님의 안전거래를 위해 무통장입금 또는 실시간 계좌이체 주문에 대해 이니시스
        에스크로 구매안전서비스를 자동 적용하고 있습니다.
      </p>
    </>
  );

  if (selectedPayment === '실시간 계좌이체') {
    content = (
      <p>
        저희 사이트는 고객님의 안전거래를 위해 무통장입금 또는 실시간 계좌이체 주문에 대해 이니시스
        에스크로 구매안전서비스를 자동 적용하고 있습니다.
      </p>
    );
  } else if (selectedPayment === '네이버페이') {
    content = (
      <p>
        · 주문 변경 시 카드사 혜택 및 할부 적용 여부는 해당 카드사 정책에 따라 변경될 수 있습니다.
        <br />
        · 네이버페이는 네이버ID로 별도 앱 설치 없이 신용카드 또는 은행계좌 정보를 등록하여
        네이버페이 비밀번호로 결제할 수 있는 간편결제 서비스입니다. <br />· 결제 가능한 신용카드:
        신한, 삼성, 현대, BC, 국민, 하나, 롯데, NH농협, 씨티, 카카오뱅크 <br />
        · 결제 가능한 은행: NH농협, 국민, 신한, 우리, 기업, SC제일, 부산, 경남, 수협, 우체국,
        미래에셋대우, 광주, 대구, 전북, 새마을금고, 제주은행, 신협, 하나은행, 케이뱅크, 카카오뱅크,
        삼성증권, KDB산업은행, 씨티은행, SBI은행, 유안타증권, 유진투자증권 <br />· 네이버페이 카드
        간편결제는 네이버페이에서 제공하는 카드사 별 무이자, 청구할인 혜택을 받을 수 있습니다
      </p>
    );
  }
  return (
    <Wrapper>
      <RadioWrapper>
        {PAYMENT_TYPE.map(({ id, name, text }) => (
          <div key={id}>
            <input
              type="radio"
              id={id}
              name={name}
              checked={selectedPayment === text}
              onChange={() => setSelectedPayment(text)}
            />
            <label htmlFor={id}>{text}</label>
          </div>
        ))}
      </RadioWrapper>
      {content}
    </Wrapper>
  );
};

export default PaymentMethod;

const Wrapper = styled.div`
  background-color: #f7f7f7;
  p {
    color: #999;
    font-size: 0.758rem;
    line-height: 200%;
    padding: 1.5em;
  }
  border-bottom: 1px solid #dddddd;
`;

const RadioWrapper = styled.div`
  display: flex;
  column-gap: 2em;
  padding: 1.5em;
  div {
    display: flex;
    column-gap: 0.5em;
    color: #666666;
    font-size: 0.7rem;
    line-height: 150%;
    @media screen and (min-width: 480px) {
      font-size: 1rem;
    }
  }

  border-bottom: 1px solid #dddddd;
`;

const Cards = styled.div`
  padding: 1.5em;
  display: flex;
  align-items: flex-start;
  column-gap: 1em;
  label {
    color: #666666;
    font-size: 1rem;
  }
  select {
    background-color: #fff;
    padding: 0.75em;
    flex: 1;
    border: 1px solid #ddd;
    :focus {
      border-color: #000;
    }
  }
  border-bottom: 1px solid #dddddd;
`;
