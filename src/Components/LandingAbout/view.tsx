import React from 'react';
import styled from 'styled-components';
import AboutUs from '../AboutUs/view';
import CallToAction from '../CallToAction/view';
import SliderShow from '../SliderShow/view';
import TeamComponent from '../TeamComponent/view';

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
  position: relative;
  overflow: hidden;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
`;
const LandingAbout = () => {
  return (
    <section>
      <Container data-aos='fade-up' data-aos-duration='1000'>
        <AboutUs />
        <SliderShow />
        <CallToAction />
        <TeamComponent />
      </Container>
    </section>
  );
};

export default LandingAbout;
