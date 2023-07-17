import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const GridContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 ${theme.spacing.small} ${(props) => (props.extendMargin ? theme.spacing.xl : theme.spacing.large)};
  gap: ${theme.spacing.large};

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin: 0 auto ${(props) => (props.extendMargin ? theme.spacing.huge : theme.spacing.xl)};
    width: 100%;
    max-width: 1200px;
    }
`;

const GridItem = styled.div`
grid-column: ${props => props.start ? `${props.start} / span ${props.span}` : `span ${props.span}`};
display: flex;
  flex-direction: column;

    > :last-child {
        flex-grow: 1;
    }
`;

const Grid = ({ children, extendMargin }) => {
  return <GridContainer extendMargin={extendMargin}>{children}</GridContainer>;
};

export { Grid, GridItem };
