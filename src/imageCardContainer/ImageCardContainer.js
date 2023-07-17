import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { ReactComponent as Flower } from '../assets/flower.svg';

const CardContainer = styled.div`
    background: ${theme.colors.accent1};
    border-radius: ${theme.borderRadius.mid};
    display: flex;
    align-items: flex-end;
    justtify-content: flex-end;
    overflow: hidden;
    position: relative;
`;

const Image = styled.img`
    display: block;
    width: 100%;
    height: auto;
    object-fit: cover;
`;

const FlowerContainer = styled.svg`
  position: absolute;
  inline-size: 100%;
  block-size: 100%;
  inset-block-end: -50%;
  inset-inline-start: -50%;
  animation: infinite-rotation 20s linear infinite;

  @keyframes infinite-rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }`;

const ImageCardContainer = ({ imageUrl, altText, flair }) => {
  const handleImageLoad = (event) => {
    const image = event.target;
    const { naturalWidth, naturalHeight } = image;

    if (naturalWidth > naturalHeight) {
      image.style.height = '100%';
      image.style.width = 'auto';
    } else {
      image.style.width = '100%';
      image.style.height = 'auto';
    }
  };

  return (
    <CardContainer>
      <Image src={imageUrl} alt={altText} onLoad={handleImageLoad} />
      {flair && (
        <FlowerContainer>
          <Flower />
        </FlowerContainer>
      )}
    </CardContainer>
  );
};

export default ImageCardContainer;
