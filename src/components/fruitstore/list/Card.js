import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai';
export default function Card({ product }) {
  return (
    <Link to={`/fruitstore/${product.product_id}`}>
      <CardBox>
        <ProductImg width="250px" height="150px" src={product.product_image[0]} />
        <ProductName>{product.product_name}</ProductName>
        <TagContainer>
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
        </TagContainer>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          <div style={{ marginRight: '5px' }}>
            {product.product_price - product.product_price * product.discount_rate * 0.01 + '원'}
          </div>
          <div style={{ textDecoration: 'line-through', color: 'gray', marginLeft: '5px' }}>
            {product.product_price + '원'}
          </div>
          <div style={{ margin: 'auto' }}>
            <AiOutlineStar size="25" />
            <span style={{ position: 'relative', top: '-5px' }}>{product.likes}</span>
          </div>
        </div>
        <div>배송방법:{product.delivery_way}</div>
        <div>배송비:{product.delivery_fee}</div>
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
const TagContainer = styled.div`
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
    cursor: pointer;
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
