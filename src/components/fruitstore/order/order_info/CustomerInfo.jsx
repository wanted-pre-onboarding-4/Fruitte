import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CustomerInfo = ({ onGetUsetInfo }) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNumber, setEnteredNumber] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');

  const phoneNumberHandler = e => {
    const regex = /^[0-9\b -]{0,13}$/;
    if (regex.test(e.target.value)) {
      setEnteredNumber(e.target.value);
    }
  };

  useEffect(() => {
    if (enteredNumber.length === 10) {
      setEnteredNumber(enteredNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
    }
    if (enteredNumber.length === 13) {
      setEnteredNumber(
        enteredNumber.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3')
      );
    }
  }, [enteredNumber]);

  useEffect(() => {
    onGetUsetInfo({
      name: enteredName,
      phone_number: enteredNumber,
      email: enteredEmail,
    });
  }, [enteredEmail, enteredName, enteredNumber, onGetUsetInfo]);

  return (
    <Wrapper>
      <InputWrapper>
        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          required
          value={enteredName}
          onChange={e => setEnteredName(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="phone">연락처</label>
        <input
          type="text"
          id="phone"
          maxLength={13}
          onChange={phoneNumberHandler}
          value={enteredNumber}
          required
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="email">이메일</label>
        <input
          type="email"
          id="email"
          required
          value={enteredEmail}
          onChange={e => setEnteredEmail(e.target.value)}
        />
      </InputWrapper>
    </Wrapper>
  );
};

export default CustomerInfo;

export const Wrapper = styled.div`
  display: grid;
  row-gap: 1em;
  padding: 1.5em;
  border-bottom: 1px solid #dddddd;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5em;
  label {
    max-width: 80px;
    width: 100%;
  }
  input,
  select {
    padding: 0.75rem;
    border: 1px solid #ddd;
    flex: 0.5;
    width: 100%;
    :focus {
      border-color: #000;
    }
  }
  span {
    font-weight: 300;
    font-size: 1.2rem;
  }
`;
