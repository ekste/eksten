import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Container = styled.div`
  background-color: ${theme.colors.background};
  padding: calc(${theme.spacing.large} + ${theme.heights.header}) 0;
  margin-top: -${theme.heights.header};
  position: relative;
  margin-block-end: ${theme.spacing.large};
  position: relative;
  overflow: hidden;

  @media (min-width: 800px) {
    padding: ${theme.spacing.huge} 0 calc(${theme.spacing.huge} + ${theme.heights.header});
  }
`;

const FlairStyles = `
  width: 300px;
  height: 80px;
  border-radius: 40px;

  @media (max-width: 799px) {
    width: 200px;
    height: 40px;
  }
`;

const FlairOneContainer = styled.div`
  inset-block-start: -50px;
  inset-inline-start: -60px;
  position: absolute;
  transform: rotateZ(135deg);
`;

const FlairTwoContainer = styled.div`
  inset-block-end: -50px;
  inset-inline-end: -60px;
  position: absolute;
  transform: rotateZ(135deg);
`;

const FlairOne = styled.div`
  &:before, &:after {
    display: block;
    background: ${theme.colors.accent1};
    content: "";
    margin: 0 0 ${theme.spacing.small};
    ${FlairStyles}
  }
`;

const FlairTwo = styled.div`
&:before, &:after {
  display: block;
  background: ${theme.colors.accent2};
  content: "";
  margin: 0 0 ${theme.spacing.small};
  ${FlairStyles}
}
`;

const HeroContainer = ({ children, ...rest }) => {
  return <Container {...rest}>
    <FlairOneContainer>
      <FlairOne />
      <FlairOne />
    </FlairOneContainer>
    {children}
    <FlairTwoContainer>
      <FlairTwo />
      <FlairTwo />
    </FlairTwoContainer>
  </Container>;
};

export default HeroContainer;