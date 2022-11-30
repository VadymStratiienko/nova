import styled from "styled-components";
import BgImg from "../../assets/img/cta-bg.jpg";
import { Parallax } from 'react-scroll-parallax';

const Container = styled.section`
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  background: linear-gradient(rgba(27, 47, 69, 0.8), rgba(27, 47, 69, 0.8)),
    url("${BgImg}") center center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px;
  display: flex;
  justify-content: center;
  padding-right: calc(var(--bs-gutter-x) * 19);
  padding-left: calc(var(--bs-gutter-x) * 19);
  /* transform: translate(0px 120%);
  opacity: 0;
  transition: all 0.8s esse 0s; */
`;
const Block = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  text-align: center;
  color: #fff;
  
  h3 {
    color: #fff;
    font-size: 28px;
    margin-bottom: 25px;
    font-weight: 700;
  }
  p {
    color: #fff;
    margin-bottom: 25px;
  }
  a {
    font-family: var(--font-default);
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 1px;
    display: inline-block;
    padding: 12px 40px;
    border-radius: 50px;
    transition: 0.5s;
    margin: 10px;
    color: #fff;
    background: #2aa5df;
    text-decoration: none;
  }
`;

const CallToAction = () => {
  return (
   
    <Container>
       <Parallax speed={-10}>
      <Block  data-aos="fade-up"   data-aos-duration="1000">
        <h3>Ut fugiat aliquam aut non</h3>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <a href="/">Call To Action</a>
      </Block>
      </Parallax>
    </Container>
    
  );
};

export default CallToAction;
