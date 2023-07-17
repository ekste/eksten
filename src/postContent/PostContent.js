import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import ImageCardContainer from '../imageCardContainer/ImageCardContainer';

const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.mid};
`;

const ImageContainer = styled.div`
  width: 60%;
`;

const PostHeader = styled.h2`
  font-family: ${theme.fonts.heading};
  font-style: ${theme.fontWeight.mid};
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.mid};
  line-height: 1;
  margin: 0 0 ${theme.spacing.small};
`;

const PostPreviewText = styled.p`
  font-size: ${theme.fontSize.small};
  font-weight: ${theme.fontWeight.light};
  margin: 0;
`;

const PostContent = ({ imageSrc, header, previewText }) => {
  return (
    <PostContainer>
      <ImageContainer>
        <ImageCardContainer imageUrl={imageSrc} altText="Post Image" />
      </ImageContainer>
      <PostHeader>{header}</PostHeader>
      <PostPreviewText>{previewText}</PostPreviewText>
    </PostContainer>
  );
};

export default PostContent;
