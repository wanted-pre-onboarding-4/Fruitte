import { useEffect } from 'react';
import productAtom from '../store/productAtom';
import { useRecoilValue } from 'recoil';
import List from '../components/fruitstore/list/List';
export default function ListPage() {
  const product = useRecoilValue(productAtom);

  useEffect(() => {
    console.log(product);
  });
  return (
    <div
      style={{
        width: '1500px',
        height: '700px',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 300px)',
        rowGap: '50px',
        columnGap: '20px',
        justifyItems: 'center',
        margin: '50px auto',
      }}
    >
      {product.map((pro, index) => {
        if (index >= 10) {
          console.log(pro);
        } else {
          console.log(index);
          return <List />;
        }
      })}
    </div>
  );
}
