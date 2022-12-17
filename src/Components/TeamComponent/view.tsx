import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Team1 from '../../assets/img/team/team-1.jpg';
import Team2 from '../../assets/img/team/team-2.jpg';
import Team3 from '../../assets/img/team/team-3.jpg';
import Team4 from '../../assets/img/team/team-4.jpg';

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
  padding: 80px 0;
`;
const TeamContainer = styled.div`
  margin: 0 auto;
`;
const SectionHeader = styled.div`
  text-align: center;
  padding-bottom: 30px;

  h2 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;

    ::after {
      content: '';
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
  }
`;
const WrapperBlocks = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  column-gap: 25px;
  --bs-gutter-y: 3rem;
`;
const Block = styled.div`
  overflow: hidden;
  background: #fff;
  width: 100%;
  width: 306px;
`;
const BlockImg = styled.div`
  position: relative;
  overflow: hidden;

  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }
`;
const Info = styled.div`
  padding: 25px 15px 0 15px;
  text-align: center;

  h4 {
    font-weight: 700;
    margin-bottom: 5px;
    font-size: 18px;
    color: var(--color-secondary);
  }
  span {
    display: block;
    font-size: 13px;
    font-weight: 400;
    color: #6c757d;
  }
`;
const Social = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 40px;
  opacity: 0;
  transition: ease-in-out 0.3s;
  background: rgba(255, 255, 255, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    color: var(--color-primary);
    opacity: 1;
  }
  a {
    transition: color 0.3s;
    color: #31547c;
    margin: 0 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`;

const Twitter = styled(BsTwitter)`
  font-size: 18px;
  margin: 0 2px;
  line-height: 0;
`;
const Facebook = styled(BsFacebook)`
  font-size: 18px;
  margin: 0 2px;
  line-height: 0;
`;
const Instagram = styled(BsInstagram)`
  font-size: 18px;
  margin: 0 2px;
  line-height: 0;
`;
const Linkedin = styled(BsLinkedin)`
  font-size: 18px;
  margin: 0 2px;
  line-height: 0;
`;

const TeamComponent = () => {
  return (
    <section>
      <Container>
        <TeamContainer>
          <SectionHeader data-aos='fade-up' data-aos-duration='1000'>
            <h2>Our Team</h2>
          </SectionHeader>
          <WrapperBlocks data-aos='fade-up' data-aos-duration='1000'>
            <Block>
              <BlockImg>
                <img src={Team1} alt='' />
                <Social>
                  <Link to='https://twitter.com/'>
                    <Twitter />
                  </Link>
                  <Link to='https://www.facebook.com/'>
                    <Facebook />
                  </Link>
                  <Link to='https://www.instagram.com'>
                    <Instagram />
                  </Link>
                  <Link to='https://www.linkedin.com/'>
                    <Linkedin />
                  </Link>
                </Social>
              </BlockImg>
              <Info data-aos='fade-up' data-aos-duration='1000'>
                <h4>Walter White</h4>
                <span>Chief Excutive Officer</span>
              </Info>
            </Block>
            <Block>
              <BlockImg data-aos='fade-up' data-aos-duration='1000'>
                <img src={Team2} alt='' />
                <Social>
                  <Link to='https://twitter.com/'>
                    <BsTwitter />
                  </Link>
                  <Link to='https://www.facebook.com/'>
                    <BsFacebook />
                  </Link>
                  <Link to='https://www.instagram.com'>
                    <BsInstagram />
                  </Link>
                  <Link to='https://www.linkedin.com/'>
                    <BsLinkedin />
                  </Link>
                </Social>
              </BlockImg>
              <Info data-aos='fade-up' data-aos-duration='1000'>
                <h4>Sara Jhonson</h4>
                <span>Product Manager</span>
              </Info>
            </Block>
            <Block>
              <BlockImg data-aos='fade-up' data-aos-duration='1000'>
                <img src={Team3} alt='' />
                <Social>
                  <Link to='https://twitter.com/'>
                    <BsTwitter />
                  </Link>
                  <Link to='https://www.facebook.com/'>
                    <BsFacebook />
                  </Link>
                  <Link to='https://www.instagram.com'>
                    <BsInstagram />
                  </Link>
                  <Link to='https://www.linkedin.com/'>
                    <BsLinkedin />
                  </Link>
                </Social>
              </BlockImg>
              <Info>
                <h4>William Anderson</h4>
                <span>CTO</span>
              </Info>
            </Block>
            <Block>
              <BlockImg data-aos='fade-up' data-aos-duration='1000'>
                <img src={Team4} alt='' />
                <Social>
                  <Link to='https://twitter.com/'>
                    <BsTwitter />
                  </Link>
                  <Link to='https://www.facebook.com/'>
                    <BsFacebook />
                  </Link>
                  <Link to='https://www.instagram.com'>
                    <BsInstagram />
                  </Link>
                  <Link to='https://www.linkedin.com/'>
                    <BsLinkedin />
                  </Link>
                </Social>
              </BlockImg>
              <Info data-aos='fade-up' data-aos-duration='1000'>
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
              </Info>
            </Block>
          </WrapperBlocks>
        </TeamContainer>
      </Container>
    </section>
  );
};

export default TeamComponent;
