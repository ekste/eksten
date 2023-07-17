import React from 'react';
import styled from 'styled-components';
import rule from '../assets/hr.svg';

const HorizontalRule = styled.hr`
    border: 0;
    background-image: url('${rule}');
    background-size: 100%;
    width: 100%;
    aspect-ratio: 163 / 9;
    margin: 0;
`;

const Hr = () => {
  return <HorizontalRule />;
};

export default Hr;
