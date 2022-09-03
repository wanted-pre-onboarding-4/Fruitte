import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';

export default function Slide({ data: { product_image } }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <>
      <SliderContainer {...settings}>
        {product_image.map((el, index) => (
          <div key={index}>{<img src={el} alt="상품이미지" />}</div>
        ))}
      </SliderContainer>
    </>
  );
}

const SliderContainer = styled(Slider)`
  width: 100%;
  overflow-x: hidden;
  height: inherit;

  div {
    width: 100%;
    height: inherit;
    object-fit: cover;
    img {
      width: 100%;
      height: inherit;
      object-fit: cover;
    }
  }

  .slick-dots {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    left: 50%;
    bottom: 45px;
    transform: translate(-50%, 0%);

    li {
      margin: 0;
      width: auto;
      height: 15px;
      margin: 0 5px;
      button {
        width: 15px;
        height: 15px;
        border-radius: 20px;
        padding: 0;
        background-color: black;
      }
    }
  }
`;
