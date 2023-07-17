import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../theme';

const StyledHeading = styled.h1`
  font-family: ${theme.fonts.heading};
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.small};
  line-height: 1;
  text-align: ${props => (props.align === 'left' ? 'left' : 'center')};
  margin: ${props =>
    props.margin === 'small'
      ? `${theme.spacing.tiny} 0 ${theme.spacing.small}`
      : `${theme.spacing.mid} 0 ${theme.spacing.large}`};
  color: inherit;

  ${props =>
    props.alt &&
    css`
      color: ${theme.colors.headerText};
    `}

  &:only-child {
    margin: ${theme.spacing.large} 0 ${theme.spacing.mid};
  }

  @media (min-width: 800px) {
    font-size: ${theme.fontSize.mid};
    margin: ${props =>
      props.margin === 'small'
        ? `${theme.spacing.small} 0 ${theme.spacing.small}`
        : `${theme.spacing.large} 0 ${theme.spacing.large}`};
  }
`;


const Heading = ({ tag, align, children, alt, margin }) => {
  return (
    <StyledHeading as={tag} align={align} alt={alt} margin={margin}>
      {children}
    </StyledHeading>
  );
};

export default Heading;