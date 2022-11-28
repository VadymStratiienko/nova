import styled from "styled-components";
import BgImg from "../../assets/img/why-us-bg.jpg";
import Slider from "../Slider/view";

const Container = styled.section`
  position: relative;
  min-height: 100vh;
  background-color: white;
  overflow: hidden;
  padding: 80px 0;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
`;
const Wrapper = styled.div`
  padding-bottom: 0;
`;
const SectionDiv = styled.div`
  text-align: center;
  padding-bottom: 30px;
`;

const SectionHeader = styled.h2`
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    display: block;
    width: 60px;
    height: 2px;
    background: var(--color-primary);
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
`;

const BlockSlider = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 12px;
  margin: 0 100px;
  justify-content: center;
`;
const BgImgDiv = styled.div`
  background-image: url("${BgImg}");
  min-height: 500px;
  height: 570px;
  background-size: cover;
  flex: 0 0 auto;
  width: 33%;
`;

const Landing = () => {
  return (
    <>
    <Container>
      <Wrapper>
        <SectionDiv>
          <SectionHeader>Why Choose Us</SectionHeader>
        </SectionDiv>
        <BlockSlider>
          <BgImgDiv />
          <div>
            <Slider />
          </div>
        </BlockSlider>
        </Wrapper>
        </Container>
        <SectionDiv>
          <Container>
          <SectionHeader>Our Services</SectionHeader>
          </Container>
        </SectionDiv>
        </>
    
  );
};

export default Landing;
