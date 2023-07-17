import React from 'react';
import HeroContainer from './HeroContainer';
import HeroText from './HeroText';
import ChunkyBorder from '../chunkyBorder/ChunkyBorder';

const Hero = ({ title, subTitle, utterance }) => {
  return (
    <HeroContainer>
      <HeroText title={title} subTitle={subTitle} utterance={utterance} />
        <ChunkyBorder />
    </HeroContainer>
  );
};

export default Hero;
