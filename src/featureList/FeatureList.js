import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const FeatureListWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-block-end: ${theme.spacing.large};

  @media (min-width: 800px) {
    margin-block-end: ${theme.spacing.xl};
  }
  
  &:last-child {
    margin-block-end: 0;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  margin-inline-end: ${theme.spacing.large};
  flex-shrink: 0;
`;

const ImageContainer = styled.div`
  background: #444;
  margin-inline-end: ${theme.spacing.large};
  width: 60px;
  height: 60px;
  border-radius: 30px;
  box-sizing: border-box;
  min-width: 60px;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.invert {
    background: ${theme.colors.headerText};
  }
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  filter: invert(1);

  &.invert {
    filter: invert(0);
  }
`;

const Title = styled.h3`
  margin: 0;
  margin-block-end: ${theme.spacing.small};
  font-size: ${theme.fontSize.small};
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeight.mid};

  @media (min-width: 800px) {
    font-size: ${theme.fontSize.mid};
  }
`;

const Description = styled.p`
    font-size: ${theme.fontSize.tiny};
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeight.light};
    margin: 0;
    color: #333;

    &.invertDescription {
      color: #ccc;
    }

    @media (min-width: 800px) {
      font-size: ${theme.fontSize.small};
    }
  `;

const FeatureList = ({ features, invert }) => {
  return (
    <FeatureListWrapper>
      {features.map((feature, index) => (
        <FeatureItem key={index}>
          {feature.icon ? (
            <ImageContainer className={invert ? 'invert' : ''}>
              <Image src={feature.icon} className={invert ? 'invert' : ''} alt="Feature Icon" />
            </ImageContainer>
          ) : (
            <Icon />
          )}
          <div>
            <Title>{feature.title}</Title>
            <Description className={invert ? 'invertDescription' : ''}>{feature.description}</Description>
          </div>
        </FeatureItem>
      ))}
    </FeatureListWrapper>
  );
};

export default FeatureList;
