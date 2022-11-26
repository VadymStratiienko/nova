import styled from "styled-components";
import HeroBg from "../../assets/img/hero-bg.jpg";


const Container = styled.section`
  width: 100%;
  background: url("${HeroBg}") top center no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  position: relative;
  top: 0;
  padding: 120px 0;
  background-size: 100% cover;
  z-index: 3;
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
const Row = styled.div`
display: flex;
opacity: 1;
z-index: 1;
`
const H2 = styled.h2`
opacity: 1;
z-index: 1;
color: #fff;

`

const Banner = () => {
  return (
    <Container>
          <Row>
          <H2>sadsadsa</H2>
          </Row>
      
    </Container>
  );
};

export default Banner;
