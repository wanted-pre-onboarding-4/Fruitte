import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import productAtom from '../../../store/productAtom';
import { useRecoilValue } from 'recoil';
import * as S from './FruitStoreDetail.styles';
import Dropdown from './DropDown';
import Slide from './Slide';
import SelectItem from './SelectItem';
import Button01 from '../../commons/buttons/Button01';
import { getUrl } from '../../../utils/getUrl';
import { useLocation } from 'react-router-dom';
export default function FruitStoreDetail() {
  const { product_id } = useParams();
  const productList = useRecoilValue(productAtom);
  const [data, setData] = useState();
  const [pick, setPick] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const temp = [...productList];
    const productData = temp.find(el => el.product_id === product_id);
    setData(productData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productList]);

  const onClickToCart = () => {
    if (totalPrice === 0) {
      alert('필수 옵션을 선택해주세요');
      return;
    }
    alert('장바구니에 담겼습니다');
  };

  const onClickToBuy = () => {
    if (totalPrice === 0) {
      alert('필수 옵션을 선택해주세요');
      return;
    }
    alert('결제 화면으로 이동합니다');
    navigate(`/shop_payment/${product_id}`, { state: { ...data, ...pick } });
  };

  return (
    <S.Wrap>
      <S.NowPage>
        <Link to="/">HOME</Link>
        <Link to="/fruitstore">FRUIT STORE</Link>
      </S.NowPage>
      <S.ProductWrap>
        <S.ImageWrap>{data && <Slide data={data} />}</S.ImageWrap>
        <S.InfoWrap>
          <S.TitleWrap>
            <S.Title>
              <S.Name>{data?.product_name}</S.Name>
              <S.LikeAndShare>
                <S.Like>
                  <img alt="like" src="/heart.png" />
                  {data?.likes}
                </S.Like>
                <S.Share
                  onClick={() => {
                    alert(`${getUrl(window.location.href).content}`);
                  }}
                >
                  <img src="https://whoau.com/morenvyimg/detail_shere.svg" alt="share" />
                </S.Share>
              </S.LikeAndShare>
            </S.Title>
            <S.Description>{data?.prdocut_description} </S.Description>
          </S.TitleWrap>
          <S.TagAndPriceWrap>
            <S.Tag>
              <ul>
                {data?.product_tags.map(el => (
                  <li key={el}>{el}</li>
                ))}
              </ul>
            </S.Tag>
            <S.PriceWrap>
              {data && (
                <>
                  {data.discount_rate === 0 ? (
                    <S.Price>{data.product_price}</S.Price>
                  ) : (
                    <>
                      <S.PriceThrough>{data.product_price.toLocaleString()}원</S.PriceThrough>
                      <S.DiscountRate>{data.discount_rate}%</S.DiscountRate>
                      <S.Price>
                        {(data.discount_rate * 0.01 * data.product_price).toLocaleString()}원
                      </S.Price>
                    </>
                  )}
                </>
              )}
            </S.PriceWrap>
          </S.TagAndPriceWrap>
          <S.DeliveryWrap>
            <S.Row>
              <S.Label>원산지</S.Label>
              <S.Content>{data?.product_origin}</S.Content>
            </S.Row>
            <S.Row>
              <S.Label>배송 방법</S.Label>
              <S.Content>{data?.delevery_way}</S.Content>
            </S.Row>
            <S.Row>
              <S.Label>배송비</S.Label>
              <S.Content>{data?.delivery_fee.toLocaleString()}원</S.Content>
            </S.Row>
            <S.Row>
              <S.Label>배송 안내</S.Label>
              <S.Content>제주, 도서지역 추가 4,000원</S.Content>
            </S.Row>
            <S.Row>
              <S.Label>필수 선택</S.Label>
            </S.Row>
            <Dropdown
              options={data?.product_options}
              pick={pick}
              setPick={setPick}
              setTotalPrice={setTotalPrice}
            />
          </S.DeliveryWrap>
          {pick.length > 0 &&
            pick.map((item, index) => (
              <SelectItem
                key={item.option_title}
                item={item}
                pick={pick}
                index={index}
                setPick={setPick}
                setTotalPrice={setTotalPrice}
              />
            ))}
          <S.TotalPriceWrap>
            <S.TotalPriceLabel>총 상품 금액</S.TotalPriceLabel>
            <S.TotalPrice>{totalPrice.toLocaleString()}원</S.TotalPrice>
          </S.TotalPriceWrap>
          <S.ButtonWrap>
            <Button01 onClick={onClickToCart} name="장바구니" />
            <Button01 onClick={onClickToBuy} name="구매하기" theme="main" />
          </S.ButtonWrap>
        </S.InfoWrap>
      </S.ProductWrap>
    </S.Wrap>
  );
}
