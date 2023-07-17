import React, { useEffect } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { ReactComponent as PlayCircle } from '../assets/play-circle.svg';

const TextContainer = styled.div`
  max-width: 799px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.small};
  padding: 0 ${theme.spacing.large};
  text-align: center;
  z-index: 5;
  position: relative;

  @media (min-width: 800px) {
    padding: 0;
  }
`;

const Title = styled.h1`
  font-family: ${theme.fonts.heading};
  font-style: normal;
  font-weight: ${theme.fontWeight.bold};
  font-size: ${theme.fontSize.mid};
  line-height: 90%;
  color: ${theme.colors.headerText};
  letter-spacing: -1px;
  margin: 0;

  @media (min-width: 800px) {
    font-size: ${theme.fontSize.large};
    letter-spacing: -3px;
  }
`;

const SubTitle = styled.h2`
  font-family: ${theme.fonts.body};
  font-style: italic;
  font-weight: ${theme.fontWeight.light};
  color: ${theme.colors.subHeaderText};
  font-size: ${theme.fontSize.small};
  margin: 0;

  @media (min-width: 800px) {
    font-size: ${theme.fontSize.mid};
    letter-spacing: -1px;
  }
  `;

const Speech = styled.div`
`;

const SpeechButton = styled.button`
display: inline-flex;
align-items: center;
gap: ${theme.spacing.small};
font-size: ${theme.fontSize.tiny};
color: ${theme.colors.offWhite};
background: transparent;
  border: 0;
  cursor: pointer;

  &:hover {
    color: ${theme.colors.subHeaderText};
  }

  > * {
    fill: white;
  }
`;

const HeroText = ({ title, subTitle, utterance }) => {
    useEffect(() => {
        const playWord = () => {
            // Create a SpeechSynthesisUtterance object
            const speechUtterance = new SpeechSynthesisUtterance(utterance);
            speechUtterance.rate = 0.9;
            // Use the SpeechSynthesis API to speak the word
            window.speechSynthesis.speak(speechUtterance);
        };

        const playButton = document.getElementById('play-button');
        if (playButton) {
            playButton.addEventListener('click', playWord);
        }

        return () => {
            // Clean up the event listener when the component unmounts
            if (playButton) {
                playButton.removeEventListener('click', playWord);
            }
        };
    }, [utterance]);

    return (
        <TextContainer>
            <Title>{title}</Title>
            {utterance && (
                <Speech>
                    <SpeechButton id="play-button">ex-ter <PlayCircle /></SpeechButton>
                </Speech>
            )}
            <SubTitle>{subTitle}</SubTitle>
        </TextContainer>
    );
};

export default HeroText;
