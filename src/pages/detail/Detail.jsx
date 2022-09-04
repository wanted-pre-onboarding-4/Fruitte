import ProductDetail from '../../components/fruitstore/detail/ProductDetail';
import styled from 'styled-components';
export default function Detail() {
  return (
    <Wrap>
      <ProductDetail />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 30px 0px;
  margin-bottom: 30px;
`;
