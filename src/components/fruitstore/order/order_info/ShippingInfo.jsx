import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { InputWrapper, Wrapper } from './CustomerInfo';
import { useDaumPostcodePopup } from 'react-daum-postcode';

const ShippingInfo = ({ onGetDeliveryInfo }) => {
  const [enteredName, setEnteredName] = useState('');
  const [postNumber, setPostNumber] = useState('');
  const [address, setAddress] = useState('');
  const [detailAddress, setDetailAddress] = useState('');
  const [selectedMemo, setSelectedMemo] = useState('');

  const open = useDaumPostcodePopup();

  const detailAddressRef = useRef();
  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setPostNumber(data.zonecode);
    setAddress(fullAddress);
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  useEffect(() => {
    onGetDeliveryInfo({
      post_number: postNumber,
      address: address,
      detail_address: detailAddress,
    });
  }, [address, detailAddress, onGetDeliveryInfo, postNumber]);

  return (
    <Wrapper>
      <InputWrapper>
        <label htmlFor="name">받으시는분</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={e => setEnteredName(e.target.value)}
        />
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="address">주소</label>
        <AddressWrapper>
          <div>
            <input type="text" readOnly value={postNumber} />
            <button type="button" onClick={handleClick}>
              주소 검색
            </button>
          </div>
          <input type="text" readOnly value={address} />
          <input
            ref={detailAddressRef}
            type="text"
            placeholder="상세주소를 입력해주세요."
            value={detailAddress}
            onChange={e => setDetailAddress(e.target.value)}
          />
        </AddressWrapper>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="memo">배송 메모</label>
        <select name="memo" id="memo" onChange={e => setSelectedMemo(e.target.value)}>
          <option value="">직접입력</option>
          <option value="call">배송 전 미리 연락바랍니다.</option>
          <option value="office">부재시 경비실에 맡겨주세요.</option>
          <option value="message">부재 시 전화 주시거나 문자 남겨 주세요.</option>
        </select>
        {selectedMemo === '' && <input type="text" />}
      </InputWrapper>
    </Wrapper>
  );
};

export default ShippingInfo;

const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;
  width: 100%;
  div {
    display: flex;
    column-gap: 0.5em;
    button {
      background: #f7f7f7;
      color: #000000;
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 0.5em 1em;
    }
  }
  input {
    width: 100%;
    padding: 0.75rem;
  }
`;
