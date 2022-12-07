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
  @media (max-width: 1680px) {
    margin: 0 160px;
  }
  @media (max-width: 1590px) {
    margin: 0 128px;
  }
  @media (max-width: 1500px) {
    margin: 0 100px;
  }
  @media (max-width: 1400px) {
    margin: 0 50px;
  }
  @media (max-width: 1380px) {
    margin: 0 45px;
  }
  @media (max-width: 1278px) {
    margin: 0 auto;
  }
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
    height: 570px;
    min-height: 500px;
    width: 540px;
    @media (max-width:1400px) {
        height: 653px;
        width: 465px;
    }
    @media (max-width:1200px) {
  width: 936px;
  }
  @media (max-width:992px) {
  width: 696px;
  height: 500px;
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
        <BgImgDiv>
        
        </BgImgDiv>
        <div>
          <SwiperShow />
        </div>
      </BlockSlider>
    </Container>
    </section>
  );
};

export default SliderShow;
