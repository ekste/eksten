import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const ContainerWrapper = styled.div`
  background-color: ${theme.colors.backgroundInverted};
  margin-block-end: ${theme.spacing.xl};
  padding: ${theme.spacing.large};
`;

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;