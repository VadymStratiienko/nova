import styled from "styled-components";
import BlogPost from "../BlogPost/view";
import CallToAction from "../CallToAction/view";
import Features from "../Features/view";
import SliderShow from "../SliderShow/view";
import Table from "../Table/view";

const Container = styled.article`
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
    <Container>
      <SliderShow />
      <Table />
      <CallToAction />
      <Features />
      <BlogPost />
    </Container>
  );
};

export default Landing;
