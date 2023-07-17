import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { ReactComponent as Flower } from '../assets/flower.svg';
import { ReactComponent as Discs } from '../assets/discs.svg';

const CardContainer = styled.div`
    background: ${theme.colors.background};
    border-radius: ${theme.borderRadius.mid};
    text-align: ${(props) => (props.centerAlign ? 'center' : 'left')};
    padding: ${theme.spacing.large};
    overflow: hidden;
    position: relative;

    @media (min-width: 800px) {
      padding: ${(props) => (props.centerAlign ? theme.spacing.huge : theme.spacing.xl)};
    }
`;

const CardTitle = styled.h2`
    color: ${theme.colors.headerText};
    font-famaily: ${theme.fonts.heading};
    font-size: ${theme.fontSize.small};
    font-weight: ${theme.fontWeight.bold};
    margin: ${(props) => (props.centerAlign ? '0 auto' : '0')};
    margin-block-end: ${theme.spacing.mid};
    max-width: ${(props) => (props.centerAlign ? '500px' : '800px')};
    position: relative;
    z-index: 4;

    @media (min-width: 800px) {
      font-size: ${theme.fontSize.mid};
    }
`;

const CardContent = styled.p`
    color: ${theme.colors.subHeaderText};
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeight.light};
    margin: ${(props) => (props.centerAlign ? '0 auto' : '0')};
    max-width: ${(props) => (props.centerAlign ? '600px' : '800px')};
    font-size: ${theme.fontSize.tiny};
    line-height: 1.25;
    position: relative;
    z-index: 4;

    @media (min-width: 800px) {
      font-size: ${theme.fontSize.small};
      line-height: 1.5;
    }
    `;

const CTAButton = styled.a`
    margin-block-start: ${theme.spacing.large};
    text-decoration: none;
    display: inline-block;
    font-size: ${theme.fontSize.small};
    background: ${theme.colors.backgroundInverted};
    box-shadow: ${theme.shadows.button};
    padding: ${theme.spacing.mid};
    font-size: ${theme.fontSize.tiny};
    border-radius: ${theme.borderRadius.tiny};
    border: 0;
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeight.bold};
    line-height: 1;
    color: ${theme.colors.bodyText};
    position: relative;
    z-index: 4;

    &:hover {
      outline: 0;
      background: ${theme.colors.headerText};
    }

    &:focus {
      outline: 2px solid ${theme.colors.background};
    }

    &:active {
      outline: 0;
      background: ${theme.colors.headerText};
      box-shadow: none;
      position: relative;
      top: 8px;
      left: 8px;
    }
    @media (min-width: 800px) {
      font-size: ${theme.fontSize.small};
      padding: ${theme.spacing.large};
      border-radius: ${theme.borderRadius.small};
    }
`;

const FlowerContainer = styled.svg`
  position: absolute;
  inline-size: 100%;
  block-size: 100%;
  inset-block-end: -50%;
  inset-inline-end: -50%;
  fill: ${theme.colors.accent1};
  animation: infinite-rotation 20s linear infinite;

  @keyframes infinite-rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }`;

const DiscsContainer = styled.div`
  position: absolute;
  inline-size: 100%;
  block-size: 100%;
  inset-block-start: 0;
  inset-inline-start: -120px;
  width: 250px;
  fill: ${theme.colors.accent1};

  svg {
    block-size: 100%;

    @media (max-width: 1300px) {
      display: none;
    }
  }
`;
const DiscsContainer2 = styled.div`
  position: absolute;
  inline-size: 100%;
  block-size: 100%;
  inset-block-end: 0;
  inset-inline-end: -120px;
  width: 250px;
  fill: ${theme.colors.accent2};
  transform: scale(-1, 1);

  svg {
    block-size: 100%;

    @media (max-width: 1300px) {
      display: none;
    }
  }
`;

const Card = ({ title, content, ctaText, ctaLink, centerAlign, flair }) => {
  return (
    <CardContainer centerAlign={centerAlign}>
      <CardTitle>{title}</CardTitle>
      <CardContent centerAlign={centerAlign}>{content}</CardContent>
      {ctaText && ctaLink && (
        <CTAButton href={ctaLink}>{ctaText}</CTAButton>
      )}
      {flair && !centerAlign && (
        <FlowerContainer>
          <Flower />
        </FlowerContainer>
      )}
      {flair && centerAlign && (
        <>
          <DiscsContainer>
            <Discs />
          </DiscsContainer>
          <DiscsContainer2>
            <Discs />
          </DiscsContainer2>
        </>
      )}
    </CardContainer>
  );
};

export default Card;
