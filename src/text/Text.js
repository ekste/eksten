import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const StyledText = styled.p`
font-family: ${theme.fonts.heading};
font-weight: ${(props) => props.large ? theme.fontWeight.mid : theme.fontWeight.light};
font-size: ${(props) => props.large ? theme.fontSize.small : theme.fontSize.tiny};
line-height: 1.5;
margin: 0 0 ${theme.spacing.large};
color: ${(props) => props.alt ? theme.colors.lightBackground : 'inherit'};
max-width: 75ch;

@media (min-width: 800px) {
  font-size: ${(props) => props.large ? theme.fontSize.mid : theme.fontSize.small};
}

&:only-child,
&:last-child {
  margin: 0;
}
`;



const Text = ({ text, alt, large }) => {
  return <StyledText>{text}</StyledText>;
};

export default Text;
