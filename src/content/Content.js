import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../theme';

const ContentWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  padding: ${theme.spacing.large};
  border-radius: ${theme.borderRadius.mid};

  /* Inverted styles */
  ${({ inverted }) =>
    inverted &&
    css`
      background-color: ${theme.colors.background};
      color: ${theme.colors.backgroundInverted};
    `
  }
  @media (min-width: 800px) {
    padding: ${theme.spacing.xl};
  }
}`;

const Content = ({ children, inverted }) => {
  return <ContentWrapper inverted={inverted}>{children}</ContentWrapper>;
};

export default Content;
