import React from 'react';
import Hero from './hero/Hero';
import Card from './card/Card';
import ImageCardContainer from './imageCardContainer/ImageCardContainer';
import { Grid, GridItem } from './grid/Grid';
import Nick from './assets/nick.png';
import Heading from './heading/Heading';
import Content from './content/Content';
import FeatureList from './featureList/FeatureList';
import Palette from './assets/palette.svg';
import Code from './assets/code.svg';
import GraduationCap from './assets/graduation-cap.svg';

const features = [
  {
    title: 'Design',
    description: "Creating designs that meet complex customer requirements. Whether it's Figma, XD, or Webflow, my creativity knows no bounds.",
    icon: Palette
  },
  {
    title: 'Development',
    description: 'Crafting intricate design systems using front-end technologies. While I love frameworks like React and Vue, I can also build from scratch.',
    icon: Code
  },
  {
    title: 'Teaching',
    description: "Beyond my day job, I'm a UX/UI Bootcamp Instructor at a global top 100 university. Guiding motivated individuals has taught me valuable lessons.",
    icon: GraduationCap
  },
];


function Home() {
  return (
    <>
      <Hero title="Nick Ekste" subTitle="Designer, Developer, Teacher" utterance="ex-tuh" />
      <div>
        <Grid>
          <GridItem span="4">
            <Card flair={true} title="Lots of experience, maybe even too much!" content="Since 2008, I've seen it all. Curious about my background? Find out more!" ctaText="All about Nick" ctaLink="/about" />
          </GridItem>
          <GridItem span="2">
            <ImageCardContainer imageUrl={Nick} altText="Example Image" flair={true} />
          </GridItem>
        </Grid>
        <Grid>
          <GridItem span="4" start="2">
            <Heading tag="h3">What do I do?</Heading>
            <Content>
              <FeatureList features={features} />
            </Content>
          </GridItem>
        </Grid>
        <Grid>
          <GridItem span="6">
            <Card flair={true} title="Need assistance?" content="With 15 years of experience and teaching expertise, I offer coaching services. Take advantage of my skills!" ctaText="Coach me!" ctaLink="/coaching" centerAlign={true} />
          </GridItem>
        </Grid>
      </div>
      {/*       <Grid>
        <GridItem span="6">
          <Heading tag="h3" align="left">Latest Posts</Heading>
        </GridItem>
      </Grid>
      <Grid extendMargin={true}>
        <GridItem span="2">
          <PostContent
            imageSrc="https://placehold.co/400x400/EEE/31343C"
            header="Example Header"
            previewText="This is a preview of the post content."
          />
        </GridItem>
        <GridItem span="2">
          <PostContent
            imageSrc="https://placehold.co/400x400/EEE/31343C"
            header="Example Header"
            previewText="This is a preview of the post content."
          />
        </GridItem>
        <GridItem span="2">
          <PostContent
            imageSrc="https://placehold.co/400x400/EEE/31343C"
            header="Example Header"
            previewText="This is a preview of the post content."
          />
        </GridItem>
      </Grid> */}
    </>
  );
}

export default Home;
