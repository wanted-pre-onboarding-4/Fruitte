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

      <ImageInputConatiner>
        <ImageLabel htmlFor="image_file">사진 업로드</ImageLabel>
        <ImageInput type="file" id="image_file" onChange={handleChange} />
      </ImageInputConatiner>
      <ImageContainer>
        {imageURLs.map((url, i) => (
          <SmallImageViewer src={url} key={i} />
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
  width: 320px;
  height: 320px;
`;

const ImageInputConatiner = styled.div`
  width: 320px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageLabel = styled.label`
  padding: 10px 5px;
  color: white;
  background-color: #317ab6;
  cursor: pointer;
  border: 1px solid #ebebeb;
  border-radius: 0.25em;
  width: 320px;
  text-align: center;
  margin: 50px;
`;

const ImageInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const ImageContainer = styled.div`
  display: inline;
  overflow: auto;
  white-space: nowrap;
  width: 320px;
`;

const SmallImageViewer = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
  border: 1px solid #ebebeb;
`;

export default ProductImage;
