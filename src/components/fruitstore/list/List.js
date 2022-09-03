import { useEffect } from 'react';
import productAtom from '../../../store/productAtom';

import { useRecoilValue } from 'recoil';
function List() {
  const product = useRecoilValue(productAtom);

  useEffect(() => {
    console.log(product);
  });
}

export default List;
