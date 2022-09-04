import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Card({ product }) {
  return (
    <Link to={`/fruitstore/${product.product_id}`}>
      <CardBox>
        <ProductImg width="280px" height="150px" src={product.product_image[0]} />
        <ProductName style={{}}>{product.product_name}</ProductName>
        <div style={{ display: 'flex', marginBottom: '30px' }}>
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
        </div>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '15px' }}>
            {product.product_price - product.product_price * product.discount_rate * 0.01 + '원'}
          </div>
          {'<='}
          <div style={{ textDecoration: 'line-through', color: 'gray', marginLeft: '15px' }}>
            {product.product_price + '원'}
          </div>
        </div>
      </CardBox>
    </Link>
  );
}
const ProductName = styled.div`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 30px;
  padding-top: 15px;
`;
const CardBox = styled.div`
  width: 280px;
  height: 300px;
  border-radius: 50px;
  padding-top: 15px;
`;
const ProductImg = styled.img`
  display: block;
  border-radius: 25px;
`;
const Tag = styled.div`
  margin-left: 10px;
  background-color: ${props => props.backcolor};
  color: ${props => props.fontcolor};
  padding: 5px;
  border-radius: 5px;
`;
