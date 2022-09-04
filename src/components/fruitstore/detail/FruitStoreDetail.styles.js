import styled from 'styled-components';
import { Colors } from '../../../styles/Colors';

export const Wrap = styled.div``;

export const NowPage = styled.div`
  width: 100%;
  margin: 20px 0px;
  display: flex;
  a {
    cursor: pointer;
  }
  a:not(:last-of-type) {
    ::after {
      content: '>';
      margin: 0px 8px;
    }
  }
`;

export const ProductWrap = styled.div`
  display: flex;
  grid-gap: 100px;
`;

export const ImageWrap = styled.section`
  width: 50%;
  height: 600px;
`;

export const InfoWrap = styled.section`
  width: 50%;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Name = styled.h1`
  font-size: 22px;
  line-height: 1.2;
  font-weight: 600;
  padding-right: 40px;
`;

export const Share = styled.div`
  width: 40px;
  cursor: pointer;
`;

export const Description = styled.div`
  color: ${Colors.GRAY_2};
`;

export const TagAndPriceWrap = styled.div`
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid ${Colors.GRAY_3};
`;

export const Tag = styled.div`
  margin-bottom: 15px;
  ul {
    display: flex;
  }
  li {
    color: ${Colors.WHITE};
    font-size: 11px;
    text-align: center;
    vertical-align: middle;
    padding: 2px 8px;
    margin-right: 10px;
  }
  li:nth-of-type(1) {
    background: ${Colors.RED};
    border: 1px solid ${Colors.RED};
  }
  li:nth-of-type(2) {
    color: ${Colors.RED};
    background: ${Colors.WHITE};
    border: 1px solid ${Colors.GRAY_3};
  }
  li:nth-of-type(3) {
    background: ${Colors.GRAY_1};
    border: 1px solid ${Colors.GRAY_1};
  }
`;

export const PriceWrap = styled.div``;

export const PriceThrough = styled.div`
  color: ${Colors.GRAY_3};
  font-size: 16px;
  text-decoration: line-through;
`;

export const DiscountRate = styled.span`
  margin-right: 10px;
  color: ${Colors.ORANGE};
  font-size: 23px;
  font-weight: 800;
  line-height: 1.5;
`;

export const Price = styled.span`
  color: black;
  font-size: 23px;
  font-weight: 800;
  line-height: 1.5;
`;

export const DeliveryWrap = styled.div`
  margin-bottom: 20px;
`;

export const Row = styled.div`
  display: flex;
  padding: 10px 0;
`;

export const Label = styled.div`
  width: 150px;
  color: ${Colors.GRAY_1};
`;

export const Content = styled.div`
  width: calc(100% -150px);
`;
export const TotalPriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 22px;
  line-height: 1.2;
  font-weight: 600;
  padding: 30px 0px;
  margin-top: 20px;
  border-top: 1px solid black;
`;
export const TotalPriceLabel = styled.div`
  color: ${Colors.BLACK};
`;

export const TotalPrice = styled.div``;

export const ButtonWrap = styled.div`
  display: flex;
  grid-gap: 10px;
`;
