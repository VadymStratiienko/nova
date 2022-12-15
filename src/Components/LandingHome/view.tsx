import styled from "styled-components";
import BlogPost from "../BlogPost/view";
import CallToAction from "../CallToAction/view";
import Features from "../Features/view";
import SliderShow from "../SliderShow/view";
import Table from "../Table/view";

const Container = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: white;
  overflow: hidden;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
`;

const Landing = () => {
  return (
    <section>
    <Container data-aos="fade-up" data-aos-duration="1000">
      <SliderShow />
      <Table />
      <CallToAction />
      <Features />
      <BlogPost />
    </Container>
    </section>
  );
};

export default Landing;
