import { Link } from 'react-router-dom';
import { useState } from 'react';

import styled from 'styled-components';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import productAtom from '../../../store/productAtom';
import ProductData from '../../../data/product.json';

import { useEffect } from 'react';
export default function Card({ product }) {
  const setProductData = useSetRecoilState(productAtom);
  const Totalproduct = useRecoilValue(productAtom);
  const [changeProduct, setChangeProduct] = useState(product);
  useEffect(() => {});
  function clickHander(e) {
    console.log(product);
    setProductData();

    console.log('succes');
  }
  return (
    <CardBox>
      <Link to={`/fruitstore/${product.product_id}`}>
        <ProductImg width="250px" height="150px" src={product.product_image[0]} />
        <ProductName>{product.product_name}</ProductName>
        <TagBox>
          {product.product_tags.map(tag => {
            return (
              <>
                {tag === 'BEST' ? (
                  <Tag backcolor="red" fontcolor="white">
                    {tag}
                  </Tag>
                ) : (
                  <Tag backcolor="skyblue">{tag}</Tag>
                )}
              </>
            );
          })}
        </TagBox>
      </Link>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <div style={{ marginRight: '5px' }}>
          {product.product_price - product.product_price * product.discount_rate * 0.01 + '원'}
        </div>
        <div style={{ textDecoration: 'line-through', color: 'gray', marginLeft: '5px' }}>
          {product.product_price + '원'}
        </div>
        <div style={{ margin: 'auto' }} onClick={e => clickHander(e)}>
          {product.isLiked ? <AiFillStar size="25" /> : <AiOutlineStar size="25" />}
          <span style={{ position: 'relative', top: '-5px' }}>{product.likes}</span>
        </div>
      </div>
      <DeleiverBox>
        <DeleiverText>배송방식:{product.delivery_way}</DeleiverText>
        <DeleiverText>배송비:{product.delivery_fee}</DeleiverText>
      </DeleiverBox>
    </CardBox>
  );
}

const ProductName = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 30px;
  padding-top: 15px;
`;
const TagBox = styled.div`
  display: flex;
  margin-bottom: 30px;
  height: auto;
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: wrap;
`;
const CardBox = styled.div`
  width: 280px;
  height: auto;
  border-radius: 50px;
  padding-top: 15px;
  &:hover {
    transform: translateY(-15px);
  }
`;
const ProductImg = styled.img`
  display: block;
  border-radius: 25px;
`;
const Tag = styled.div`
  margin-left: 10px;
  margin-top: 10px;

  background-color: ${props => props.backcolor};
  color: ${props => props.fontcolor};
  padding: 5px;
  border-radius: 5px;
`;

const DeleiverBox = styled.div`
  display: flex;
  background-color: lavender;
  justify-content: space-around;
  border-radius: 60px;
  margin-top: 15px;
  width: 250px;
`;
const DeleiverText = styled.div`
  margin: 15px 0 15px 5px;
  font-weight: 800;
`;
