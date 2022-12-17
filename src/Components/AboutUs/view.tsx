import { BsCheckCircleFill } from 'react-icons/bs';
import styled from 'styled-components';
import About from '../../assets/img/about.jpg';

const Container = styled.div`
  overflow: hidden;
  padding: 80px 0;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  margin: 0 auto;
  max-width: 1320px;
`;
const Block = styled.div`
  display: flex;
  flex-wrap: nowrap;
  @media (max-width: 876px) {
    flex-wrap: wrap;
  }
`;

const BlockImg = styled.div`
  margin: 24px 0 0;
  padding: 0 12px;
  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
`;
const Col = styled.div`
  margin: 24px 0 0;
  padding: 0 12px;
`;
const Content = styled.div`
  padding: 0 0 0 48px;

  h3 {
    font-weight: 700;
    font-size: 36px;
    font-family: var(--font-secondary);
    color: var(--color-secondary);
  }
  p {
    margin: 30px 0;
    color: #29486a;
  }
  ul {
    list-style: none;
    padding: 0;
    margin-top: 0;
    margin-bottom: 1rem;

    li {
      padding: 0 0 15px 26px;
      position: relative;
      font-size: 15px;
      font-weight: 600;
    }
  }
  @media (max-width: 992px) {
    padding: 0;
  }
`;
const Check = styled(BsCheckCircleFill)`
  position: absolute;
  font-size: 20px;
  left: 0;
  top: -3px;
  color: var(--color-primary);
`;

const AboutUs = () => {
  return (
    <section>
      <Container data-aos='fade-up' data-aos-duration='1000'>
        <Block>
          <BlockImg>
            <img src={About} alt='' />
          </BlockImg>
          <Col>
            <Content>
              <h3>Voluptatem dignissimos provident quasi</h3>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident
              </p>
              <ul>
                <li>
                  <Check />
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  <Check />
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </li>
                <li>
                  <Check />
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
              </ul>
            </Content>
          </Col>
        </Block>
      </Container>
    </section>
  );
};

export default AboutUs;
