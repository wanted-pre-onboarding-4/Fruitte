import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import productAtom from '../../../store/productAtom';
import Pagination from './Pagenation';
export default function List() {
  const product = useRecoilValue(productAtom);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * 10;
  useEffect(() => {
    console.log(product);
  });
  return (
    <>
      <Container>
        {product.slice(offset, offset + 10).map((pro, index) => {
          return <Card>{pro.product_id}</Card>;
        })}
      </Container>
      <Pagination total={product.length} limit={10} page={page} setPage={setPage} />
    </>
  );
}

const Container = styled.div`
  width: 1500px;
  height: 700px;
  display: grid;
  grid-template-columns: repeat(5, 300px);
  row-gap: 50px;
  column-gap: 20px;
  justify-items: center;
  margin: 50px auto;
`;

const Card = styled.div`
  width: 280px;
  height: 300px;
  border: 2px solid black;
  border-radius: 50px;
`;
