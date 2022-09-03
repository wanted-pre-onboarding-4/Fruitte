import React, { useState } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

const ProductImage = () => {
  const previewRef = useRef(null);
  const [imageURLs, setImageURLs] = useState([]);

  const encodeFileToBase64 = fileBlob => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);

    return new Promise(resolve => {
      reader.onload = () => {
        setImageURLs(prev => [...prev, String(reader.result)]);
        previewRef.current.src = String(reader.result);
        resolve();
      };
    });
  };

  const handleChange = e => {
    encodeFileToBase64(e.target.files[0]);
  };

  return (
    <Container>
      <ImageViewer ref={previewRef} />
      <ImageInput type="file" onChange={handleChange} />
      <ImageContainer>
        {imageURLs.map(url => (
          <SmallImageViewer src={url} key={url} />
        ))}
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px;
`;

const ImageViewer = styled.img`
  width: 200px;
  height: 200px;
`;

const ImageInput = styled.input`
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  display: inline;
`;

const SmallImageViewer = styled.img`
  width: 100px;
  height: 100px;
`;

export default ProductImage;
