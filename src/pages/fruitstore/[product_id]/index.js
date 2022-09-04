import FruitStoreDetail from '../../../components/fruitstore/detail/FruitStoreDetail';
import styled from 'styled-components';
export default function FruitStoreDetailPage() {
  return (
    <Wrap>
      <FruitStoreDetail />
    </Wrap>
  );
}

const Wrap = styled.div`
  width: 100%;
  max-width: 1240px;
  /* min-width: 1125px; */
  margin: 0 auto;
  padding: 30px 0px;
`;
