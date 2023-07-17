import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import ChunkyBorder from '../chunkyBorder/ChunkyBorder';

const FooterContainer = styled.footer`
  position: relative;
  background: black;
  padding: ${theme.spacing.huge} ${theme.spacing.large} ${theme.spacing.xl};
  color: ${theme.colors.subHeaderText};
  margin-block-start: auto;
}
`;

const FooterText = styled.p`
  margin: 0;
  font-size: ${theme.fontSize.tiny};
  font-weight: ${theme.fontWeight.light};
  color: ${theme.colors.translucentText};
  margin-block-end: ${theme.spacing.small};

  a {
    color: ${theme.colors.translucentText};
    text-decoration: none;
  }
  @media (min-width: 800px) {
    font-size: ${theme.fontSize.small};
  }
`;

const FooterQuestion = styled.p`
  font-size: ${theme.fontSize.tiny};
  font-weight: ${theme.fontWeight.light};
  color: ${theme.colors.subHeaderText};
  margin: 0;
  margin-block-end: ${theme.spacing.mid};

  @media (min-width: 800px) {
    font-size: ${theme.fontSize.small};
  }
`;

const FooterLink = styled.a`
  color: ${theme.colors.headerText};
  text-decoration: none;

  &:hover {
    color: ${theme.colors.subHeaderText};
  }
`;

const Footer = ({ link, credit, question, linkText, iconLink, iconName }) => {
  return (
    <FooterContainer>
      <ChunkyBorder alignTop={true} />
      <FooterText>{credit} <a href={iconLink}>{iconName}</a>.</FooterText>
      <FooterQuestion>{question} {link && (
          <FooterLink href={link}>{linkText}</FooterLink>
      )}
      </FooterQuestion>
    </FooterContainer>
  );
};

export default Footer;
