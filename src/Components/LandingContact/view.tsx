import { BsEnvelope, BsGeoAlt, BsPhone } from "react-icons/bs";
import styled from "styled-components";
import ContactBg from "../../assets/img/contact-bg.png";

const Container = styled.div`
  overflow: hidden;
  padding: 80px 0;
  background-image: url("${ContactBg}");
  background-repeat: no-repeat;
  background-position: left top;
  background-size: contain;
  position: relative;
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
  ::before {
    content: "";
    background: rgba(255, 255, 255, 0.7);
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
  }
  @media(min-width: 1400px) {
    max-width: 1320px;
  }
`;
const ContactWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;
const InfoBlock = styled.div`
  max-width: 526px;
  width: 100%;
  margin: 24px 0 0;
  padding: 0 12px;

  .info-item {
    margin-top: 40px;
  }
`;
const InfoItem = styled.div`
  display: flex;
  justify-content: flex-start;
  h4 {
    padding: 0;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 5px;
    color: #1c88ba;
  }
  p {
    padding: 0;
    margin-bottom: 0;
    font-size: 14px;
  }
`;
const BlockIcon = styled.div`
  background: var(--color-primary);

  color: #fff;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  margin-right: 15px;
  flex-shrink: 0;
`;
const GeoAlt = styled(BsGeoAlt)`
  font-size: 20px;
`;
const Envelope = styled(BsEnvelope)`
  font-size: 20px;
`;
const Phone = styled(BsPhone)`
  font-size: 20px;
`;
const FormBlock = styled.div`
  max-width: 660px;
  min-width: 350px;
  width: 100%;
  margin: 24px 0 0;
  padding: 0 12px;
`;
const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const FormGroup = styled.div`
  padding: 0 12px 8px;
  padding-right: 0;
  width: 100%;

  @media (min-width: 768px) {
    flex: 0 0 auto;
    width: 50%;
  }
  input {
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    padding: 12px 15px;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;
const FormGroupSecond = styled.div`
  padding-bottom: 8px;
  padding-left: 12px;
  margin-top: 1rem;

  input {
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    padding: 12px 15px;
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  textarea {
    resize: none;
    padding: 10px 12px;
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    min-height: calc(1.5em + 0.75rem rem + 2px);
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    appearance: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;
const BlockButton = styled.div`
  text-align: center;
  margin-top: 1rem;
  button {
    background: #1f98d1;
    border: 0;
    padding: 12px 40px;
    color: #fff;
    transition: 0.4s;
    cursor: pointer;
        margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }
`;

const LandingContact = () => {
  return (
    <section>
      <Container>
        <ContactWrapper>
          <InfoBlock>
            <InfoItem>
              <BlockIcon>
                <GeoAlt />
              </BlockIcon>
              <div>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>
            </InfoItem>
            <InfoItem className="info-item">
              <BlockIcon>
                <Envelope />
              </BlockIcon>
              <div>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>
            </InfoItem>
            <InfoItem className="info-item">
              <BlockIcon>
                <Phone />
              </BlockIcon>
              <div>
                <h4>Call:</h4>
                <p>+1 5589 55488 55</p>
              </div>
            </InfoItem>
          </InfoBlock>
          <FormBlock>
            <form action="">
              <Block>
                <FormGroup>
                  <input type="text" placeholder="Your Name"/>
                </FormGroup>
                <FormGroup>
                  <input type="text" placeholder="Your Email"/>
                </FormGroup>
              </Block>
              <FormGroupSecond>
                <input type="text" placeholder="Subject"/>
              </FormGroupSecond>
              <FormGroupSecond>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Message"
                ></textarea>
              </FormGroupSecond>
              <BlockButton>
                <button type="submit">Send Message</button>
              </BlockButton>
            </form>
          </FormBlock>
        </ContactWrapper>
      </Container>
    </section>
  );
};

export default LandingContact;
