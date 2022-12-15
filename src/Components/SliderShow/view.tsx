import styled from "styled-components";
import BgImg from "../../assets/img/why-us-bg.jpg";
import SwiperShow from "../SwiperShow/view";

const Container = styled.div`
  padding-bottom: 0;
  overflow: hidden;
  padding: 80px 0;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin: 0 auto;
  max-width: 1320px;
  min-width: 350px;
`;
const BlockSlider = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 12px;
  flex-shrink: 1;
  justify-content: center;
  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;
const BgImgDiv = styled.div`
background-image: url("${BgImg}");
background-size: cover;
    max-height: 570px;
    min-height: 500px;
     max-width: 540px;
     min-width: 350px;
     
    @media (max-width:1400px) {
        max-height: 653px;
        max-width: 465px;
    }
    @media (max-width:1200px) {
  max-width: 936px;
  }
  @media (max-width:992px) {
  max-width: 696px;
  max-height: 500px;
  }
  @media (max-width:768px) {

  width: 516px;
  height: 500px;
  }
  
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
const SectionDiv = styled.div`
  text-align: center;
  padding-bottom: 30px;
`;

const SliderShow = () => {
  return (
    <section>
      <Container>
        <SectionDiv>
          <SectionHeader data-aos="fade-up" data-aos-duration="1000">
            Why Choose Us
          </SectionHeader>
        </SectionDiv>
        <BlockSlider data-aos="fade-up" data-aos-duration="1000">
          <BgImgDiv></BgImgDiv>
          <div>
            <SwiperShow />
          </div>
        </BlockSlider>
      </Container>
    </section>
  );
};

export default SliderShow;
