import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const borderHeight = 18;

const ChunkyBorderElement = styled.div`
    position: absolute;
    bottom: ${(props) => (props.alignTop ? 'auto' : `${borderHeight}px`)};
    top: ${(props) => (props.alignTop ? `${borderHeight}px` : 'auto')};
    left: 0;
    right: 0;
    z-index: 3;

    &:after {
    }

    &:before {
        margin-block-end: ${borderHeight}px;
    }

    &:before, &:after {
        display: block;
        content: "";
        height: ${borderHeight}px;
        background: ${theme.colors.subHeaderText};
        box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 0.25);
    }
`;

const ChunkyBorder = ({ alignTop }) => {
    return (
        <ChunkyBorderElement alignTop={alignTop} />
    );
};

export default ChunkyBorder;
