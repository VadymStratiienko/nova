import styled from "styled-components";
import HeroBg from "../../assets/img/hero-bg.jpg";
import ModalVideo from "../Modal/view";

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  background: url("${HeroBg}") top center no-repeat;
  background-attachment: fixed;
  background-size: cover;
  position: relative;
  min-height: 100vh;
  padding: 120px 0;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 0;

  ::after {
    position: absolute;
    content: "";
    width: 40%;
    background: var(--color-secondary);
    top: 0;
    bottom: 0;
  }
  ::before {
    position: absolute;
    content: "";
    background: rgba(27, 47, 69, 0.6);
    inset: 0;
  }
  @media (max-width: 1034px) {
  ::after {
    position: absolute;
    content: normal;
    width: 40%;
    background: var(--color-secondary);
    top: 0;
    bottom: 0;
  }
}
  @media (max-width: 1034px) {
  ::before {
    background: rgba(27, 47, 69, 0.7);
   
  }
}
@media (min-width: 1365px) {
  
    background-attachment: fixed;
}
  
`;
const Col = styled.div`
  flex-shrink: 1;
  z-index: 1;
  width: 420px;
  margin-left: 300px;
  padding-right: 30px;

  @media (max-width: 1680px) {
    margin: 0 160px;
  }
  @media (max-width: 1590px) {
    margin: 0 128px;
  }
  @media (max-width: 1380px) {
    margin: 0 90px;
  }
  @media (max-width: 1278px) {
    margin: 0 50px;
  }
  @media (max-width: 1200px) {
    margin: 0 50px;
    width: 100%;
  }
  @media (max-width: 992px) {
    margin: 0 100px;
    max-width: 720px;
  }
  @media (max-width: 768px) {
    max-width: 540px;
  }
  @media (max-width: 640px) {
    margin-left: 20px;
    padding: 0;
    margin: 0;
    width: 100%;
  }
  h2 {
    z-index: 1;
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    font-family: var(--font-secondary);
    @media (max-width: 640px) {
      font-size: 36px;
      line-height: 1;
    }
  }
  blockquote {
    z-index: 1;
    color: #fff;
    font-size: 15px;
    font-family: var(--font-default);
    border-left: 2px solid var(--color-primary);
    margin: 40px 0;

    P {
      color: #fff;
      z-index: 1;
      margin-left: 20px;
    }
  }
  > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
  }
`;
const BlockBtn = styled.div`
  z-index: 1;
  display: flex;
`;
const ButtonStart = styled.a`
  z-index: 1;
  cursor: pointer;
  font-family: var(--font-secondary);
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 12px 30px;
  border-radius: 50px;
  transition: 0.5s;
  color: #fff;
  background: var(--color-primary);
  :hover {
    background: rgba(86, 184, 230, 0.8);
  }
  @media (max-width: 640px) {
    font-size: 13px;
  }
`;

const BannerHome = ({children}:any) => {

  return (
  
    <section>
      <Container>
        <Col>
          <h2 data-aos="fade-up" data-aos-duration="1000">
            Focus On What Matters
          </h2>
          <blockquote data-aos="fade-up" data-aos-duration="1000">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis cum recusandae eum laboriosam voluptatem repudiandae
              odio, vel exercitationem officiis provident minima.
            </p>
          </blockquote>
          <BlockBtn data-aos="fade-up" data-aos-duration="1000">
            <ButtonStart>Get Started</ButtonStart>
           <ModalVideo />
          </BlockBtn>
        </Col>
      </Container>
    </section>
  );
};

export default BannerHome;
