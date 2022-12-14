import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import productAtom from '../../../store/productAtom';
import Pagination from '../../commons/Pagination';
import Card from './Card';

export default function List() {
  const product = useRecoilValue(productAtom);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * 10;

  return (
    <>
      <Container>
        {product
          .filter(product => product.isShown === true)
          .slice(offset, offset + 10)
          .map((product, index) => {
            return <Card key={index} product={product} />;
          })}
      </Container>
      <Pagination total={product.length} limit={10} page={page} setPage={setPage} />
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  padding: 0px 30px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 50px;
  column-gap: 10px;
  justify-items: center;
  margin: 50px 0px 100px 0px;
`;
