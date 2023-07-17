import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const QuoteContainer = styled.div`
  display: flex;
  align-items: flex-start;

`;

const QuoteText = styled.p`
  font-family: ${theme.fonts.body};
  font-style: italic;
  font-weight: ${theme.fontWeight.light};
  font-size: ${theme.fontSize.small};
  line-height: 1.25;
  color: ${theme.colors.background};
  margin: 0 0 ${theme.spacing.mid};
`;

const QuoteAuthor = styled.p`
    font-family: ${theme.fonts.heading};
    font-style: normal;
    font-weight: ${theme.fontWeight.bold};
    font-size: ${theme.fontSize.tiny};
    color: ${theme.colors.background};
    margin-top: 5px;
`;
let imageSize = 100;
const QuoteImage = styled.img`
  width: ${imageSize}px;
  height: ${imageSize}px;
  border-radius: ${imageSize/2}px;
  margin-inline-end: ${theme.spacing.large};
`;

const Quote = ({ text, author, imageSrc }) => {
  return (
    <QuoteContainer>
      {imageSrc && <QuoteImage src={imageSrc} alt="Author" />}
      <div>
        <QuoteText>&quot;{text}&quot;</QuoteText>
        <QuoteAuthor>{author}</QuoteAuthor>
      </div>
    </QuoteContainer>
  );
};

export default Quote;
