import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import productAtom from '../../../store/productAtom';

export default function Card({ product }) {
  const setProductData = useSetRecoilState(productAtom);
  const totalProduct = useRecoilValue(productAtom);
  function clickHander(e) {
    let tempTotal = totalProduct.map(temp => {
      if (temp.product_id === product.product_id) {
        if (temp.isLiked === true) {
          return {
            ...temp,
            likes: product.likes - 1,
            isLiked: !product.isLiked,
          };
        } else {
          return {
            ...temp,
            likes: product.likes + 1,
            isLiked: !product.isLiked,
          };
        }
      } else {
        return { ...temp };
      }
    });
    setProductData(tempTotal);
  }
  return (
    <CardBox>
      <Link to={`/fruitstore/${product.product_id}`} state={{ product: product }}>
        <ProductImg width="250px" height="150px" src={product.product_image[0]} />
        <ProductName>
          {product.product_name.length > 15
            ? product.product_name.slice(0, 20) + '....'
            : product.product_name}
        </ProductName>
        <TagBox>
          {product.product_tags.map((tag, index) => {
            return (
              <div key={tag}>
                {tag === 'BEST' ? (
                  <Tag key={tag} backcolor="red" fontcolor="white">
                    {tag}
                  </Tag>
                ) : (
                  <Tag key={tag} backcolor="skyblue">
                    {tag}
                  </Tag>
                )}
              </div>
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
    </CardBox>
  );
}

const ProductName = styled.div`
  font-size: 20px;
  font-weight: 500;
  width: 250px;
  height: 70px;
  margin-bottom: 30px;
  overflow: hidden;
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
