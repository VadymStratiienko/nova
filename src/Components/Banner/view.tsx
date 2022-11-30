import styled from "styled-components";
import HeroBg from "../../assets/img/hero-bg.jpg";
import { AiOutlinePlayCircle } from "react-icons/ai";

const Container = styled.section`
  width: 100%;
  background: url("${HeroBg}") top center no-repeat;
  background-attachment: fixed;
  background-size: cover;
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
`;
const Col = styled.div`
flex-shrink: 2;
z-index: 1;
max-width: 440px;
--bs-gutter-x: 1.5rem;
--bs-gutter-y: 1;
   margin-top: calc(-1 * var(--bs-gutter-y));
   margin-right: calc(-1.5 * var(--bs-gutter-x));
   margin-left: calc(12.5 * var(--bs-gutter-x));

  h2 {
    
    z-index: 1;
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    line-height: 1.2;
    font-family: var(--font-secondary);
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
// const Row = styled.div`



//`;

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
`;
const Play = styled(AiOutlinePlayCircle)`
  z-index: 1;
  height: 32px;
  width: 32px;
  color: var(--color-primary);
  margin-right: 5px;
`;
const BtnPlay = styled.a`
  z-index: 1;
  display: flex !important;
  align-items: center;
  font-size: 16px;
  transition: 0.5s;
  margin-left: 25px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  text-decoration: none;
`;

const Banner = () => {
  return (
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
          <BtnPlay href="#">
            {" "}
            <Play />
            <span>Watch Video</span>
          </BtnPlay>
        </BlockBtn>
      </Col>
    </Container>
  );
};

export default Banner;
