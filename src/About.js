import React from 'react';
import Hero from './hero/Hero';
import { Grid, GridItem } from './grid/Grid';
import Content from './content/Content';
import Text from './text/Text';
import GI from './assets/gi.png';
import ImageCardContainer from './imageCardContainer/ImageCardContainer';
import Card from './card/Card';

const About = () => {
  return (
    <>
      <Hero title="About" />
      <Grid>
        <GridItem span="6">
          <Card flair={true} title="I'm Nick Ekste, a UX Designer and Front-End Developer." content="With over a decade of experience crafting top-notch front-end assets in various industries, I'm all about creating seamless user experiences and making applications visually appealing." />
        </GridItem>
        <GridItem span="6">
          <Content>
            <Text text="Currently, I'm a Senior Developer in within UX at Pinewood Technologies plc, where I've been since 2015. I'm part of the team responsible for designing and developing an in-house design system that serves as the foundation for all of our projects." />
            <Text text="My priority is making our applications as intuitive and user-centric as possible. I use design tools like Figma to prototype and then bring my front-end expertise to create components which bring our ideas to life, focusing on lean and secure JavaScript that really shines in terms of performance." />
          </Content>
        </GridItem>
        <GridItem span="4">
          <Content inverted={true}>
          <Text text="Alongside my full-time position, I am a UX/UI Bootcamp Instructor at a global top 100 university. " />
          <Text text="I teach a cohort of students, delivering a comprehensive curriculum and providing support towards graduation. Drawing from my extensive experience in the field, I incorporate real-world examples to enhance the learning experience and provide practical insights to the students." />
          </Content>
        </GridItem>
        <GridItem span="2">
          <ImageCardContainer imageUrl={GI} altText="Nick Ekste" flair={true} />
        </GridItem>
        <GridItem span="6">
          <Content>
            <Text text="In my previous adventures, I made an impact as a Senior Web Designer at Attraction World Group, playing a key role in redesigning and launching two retail websites. At JE Consulting, I managed clients, launched websites and honed my skills. Kicking off my career as a Front-End Developer at Connect Distribution Services, I worked with major brands to buid impressive user interfaces." />
            <Text text="I hold a BSc (Hons) in Multimedia Technology with a 2:1 from Birmingham City University, which I completed from September 2004 to June 2007." />
          </Content>
        </GridItem>
      </Grid>
    </>
  );
};

export default About;
