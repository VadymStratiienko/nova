import styled from "styled-components";
import BgImg from "../../assets/img/why-us-bg.jpg";
import SwiperShow from "../SwiperShow/view";

const Container = styled.div`
  padding-bottom: 0;
  overflow: hidden;
  padding: 80px 0;
  width: 100%;
  max-width: 1320px;
  margin-right: auto;
  margin-left: auto;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`;
const BlockSlider = styled.div`
  display: flex;
  flex-direction: row;

  padding: 0 12px;
  justify-content: center;
  @media (max-width: 1320px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const BgImgDiv = styled.div`
  width: 100%;
  max-width: 540px;
  min-width: 350px;
  max-height: 578px;
  height: 100%;
  display: flex;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    @media (max-width: 1320px) {
      object-position: top;
      object-fit: none;
    }
    @media (max-width: 765px) {
      object-fit: contain;
  }
  }

  @media (max-width: 1320px) {
    max-width: 936px;
    width: 100%;
    min-width: 350px;
  }
  @media (max-width:992px) {
    max-width: 696px;
  }
  @media (max-width: 765px) {
    max-width: 516px;
  }
  @media (max-width: 600px) {
    max-width: 450px;
    min-width: 350px;
  }
  @media (max-width: 500px) {
    max-width: 350px;
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
            <img src={BgImg} alt="" />
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
