import { useEffect } from 'react';
import productAtom from '../../../store/productAtom';
import { useRecoilValue } from 'recoil';
export default function List() {
  return (
    <div
      style={{ width: '280px', height: '300px', border: '2px solid black', borderRadius: '50px' }}
    ></div>
  );
}
