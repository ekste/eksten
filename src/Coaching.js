import React from 'react';
import Hero from './hero/Hero';
import { Grid, GridItem } from './grid/Grid';
import Content from './content/Content';
import Heading from './heading/Heading';
import FeatureList from './featureList/FeatureList';
import Form from './form/Form';
import Hr from './hr/Hr';
import Text from './text/Text';
import Quote from './quote/Quote';
import Faiza from './assets/faiza.jpeg';
import Francesca from './assets/francesca.jpeg';
import Strategy from './assets/strategy.svg';
import BookOpen from './assets/book-open.svg';
import Phone from './assets/phone.svg';

const features = [
  {
    title: 'Regular Check-ins',
    description: 'I offer 30-minute sessions to guide your early career, provide UX advice, or discuss educational options.',
    icon: Phone
  },
  {
    title: 'Extensive Experience',
    description: 'With 15 years in front-end, UX, and UI roles at diverse organizations, coupled with guiding professionals through bootcamps, I can assist individuals at any stage of their career.',
    icon: BookOpen
  },
  {
    title: 'Enhancing Employability',
    description: 'From feedback on case studies to interview preparation and CV feedback, I leverage my industry and education expertise to make you more employable.',
    icon: Strategy
  },
];

const Coaching = () => {
  return (
    <>
      <Hero title="Coaching" />
      <Grid>
        <GridItem span="6">
          <Content inverted={true}>
            <Text text="I am passionate about giving back and helping individuals thrive in their careers. From offering feedback on case studies to interview preparation and CV reviews, I am committed to enhancing your employability and helping you achieve your goals. Let's collaborate and unlock your full potential together!" />
            <Heading tag="h3" align="left">What's in it for you?</Heading>
            <Grid>
              <GridItem span="4">
                <FeatureList features={features} invert={true} />
              </GridItem>
              <GridItem span="2">
              </GridItem>
            </Grid>
            <Grid>
              <GridItem span="4">
                <Hr />
              </GridItem>
            </Grid>
            <Heading tag="h3" align="left" alt={true.toString()} margin="small">My schedule is currently full, but it changes weekly</Heading>
            <Text text="Leave your details, and I'll reach out once I have availability for a free 30-minute introductory session. " />
            <Form />
          </Content>
        </GridItem>
      </Grid>
      <Grid>
        <GridItem span="3">
          <Content>
            <Quote
              text="I wholeheartedly recommend Nick to anyone seeking a dedicated and knowledgeable instructor who can provide a transformative educational experience."
              author="Faiza, UX/UI Designer"
              imageSrc={Faiza}
            />
          </Content>
        </GridItem>
        <GridItem span="3">
          <Content>
            <Quote
              text="For me, Nick was and is a guide and a point of reference necessary to continue on my professional and human path."
              author="Francesca, UX/UI Designer"
              imageSrc={Francesca}
            />
          </Content>
        </GridItem>
      </Grid>
    </>
  );
};

export default Coaching;
