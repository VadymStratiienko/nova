import {
  BsDash,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import styled from "styled-components";

const ContainerFooter = styled.footer`
z-index: 99;
  font-size: 14px;
`;
const FooterContent = styled.div`
  background-color: #f7f9fc;
  background-size: contain;
  padding: 60px 0 30px 0;
`;
const Container = styled.div`
  --bs-gutter-x: 1rem;
  --bs-gutter-y: 0;
  width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 1.5);
  padding-left: calc(var(--bs-gutter-x) * 18.5);
  margin-right: auto;
  margin-left: auto;
`;
const Row = styled.div`
  display: flex;
  column-gap: 80px;
`;
const FooterInfo = styled.div`
  margin: 24px 0 30px;
  max-width: 475px;
  p {
    font-size: 15px;
    margin-bottom: 0;
    font-family: var(--font-primary);
    color: var(--color-secondary);
    padding-right: calc(var(--bs-gutter-x) * -0.5);
  }
`;
const Logo = styled.span`
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--color-secondary);
  font-family: var(--font-secondary);
  margin-top: 30px;
`;
const LinkLogo = styled.a`
  text-decoration: none;
  line-height: 0;
  margin-bottom: 25px;
`;
const BlockIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 1rem;

  a {
    font-size: 14px;
    line-height: 0;
    display: inline-block;
    width: 32px;
    height: 32px;
    color: rgba(27, 47, 69, 0.5);
    margin-right: 10px;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-primary);
    color: #fff;
    border-radius: 50px;
  }
`;
const FooterLinks = styled.div`
  margin: 0 30px;

  h4 {
    font-size: 16px;
    font-weight: bold;
    color: #29486a;
    position: relative;
    padding-bottom: 12px;
  }
  ul {
    padding: 0;
    margin: 0;

    li {
      padding: 10px 0;

      a {
        text-decoration: none;
      }
    }
  }
`;

const FooterBy = styled.div`
padding: 30px 0;
display: flex;
justify-content:center;
align-items: center;

div{
  text-align: center;
}
`

function Footer() {
  return (
    <ContainerFooter>
      <FooterContent>
        <Container>
          <Row>
            <FooterInfo>
              <LinkLogo href="/">
                <Logo>Nova</Logo>
              </LinkLogo>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
                nada terra videa magna derita valies darta donna mare fermentum
                iaculis eu non diam phasellus.
              </p>
              <BlockIcons>
                <a href="https://twitter.com/">
                  <BsTwitter />
                </a>
                <a href="https://www.facebook.com/">
                  <BsFacebook />
                </a>
                <a
                  href="https://www.instagram.com
"
                >
                  <BsInstagram />
                </a>
                <a href="https://www.linkedin.com/">
                  <BsLinkedin />
                </a>
              </BlockIcons>
            </FooterInfo>

            <FooterLinks>
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <BsDash /> <a href="/">Home</a>
                </li>
                <li>
                  <BsDash /> <a href="/">About us</a>
                </li>
                <li>
                  <BsDash /> <a href="/">Services</a>
                </li>
                <li>
                  <BsDash />
                  <a href="/">Terms of service</a>
                </li>
                <li>
                  <BsDash /> <a href="/">Privacy policy</a>
                </li>
              </ul>
            </FooterLinks>

            <FooterLinks>
              <h4>Our Services</h4>
              <ul>
                <li>
                  <BsDash /> <a href="/">Web Design</a>
                </li>
                <li>
                  <BsDash /> <a href="/">Web Development</a>
                </li>
                <li>
                  <BsDash /> <a href="/">Product Management</a>
                </li>
                <li>
                  <BsDash /> <a href="/">Marketing</a>
                </li>
                <li>
                  <BsDash /> <a href="/">Graphic Design</a>
                </li>
              </ul>
            </FooterLinks>

            <FooterLinks>
              <h4>Contact Us</h4>
              <p>
                A108 Adam Street <br />
                New York, NY 535022
                <br />
                United States <br />
                <br />
                <strong>Phone:</strong> +1 5589 55488 55
                <br />
                <strong>Email:</strong> info@example.com
                <br />
              </p>
            </FooterLinks>
          </Row>
        </Container>
      </FooterContent>

      <FooterBy>
        <div>
          <div>
            &copy; Copyright{" "}
            <strong>
              <span>Nova</span>
            </strong>
            . All Rights Reserved
          </div>
          <div>Designed by Designed</div>
        </div>
      </FooterBy>
    </ContainerFooter>
  );
}

export default Footer;
