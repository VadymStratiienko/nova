import styled from 'styled-components';
import Card1 from '../../assets/img/cards-1.jpg';
import Card2 from '../../assets/img/cards-2.jpg';
import Card3 from '../../assets/img/cards-3.jpg';
import Card4 from '../../assets/img/cards-4.jpg';

const Container = styled.div`
  background: #f7f9fc;
  overflow: hidden;
  padding: 80px 0;
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
`;

const WrapperCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Card = styled.div`
  display: flex;
  max-width: 650px;
  @media (max-width: 1350px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const BlockImg = styled.div`
  padding: 0 12px;
`;
const CardBg1 = styled.div`
  background-image: url('${Card1}');
  min-height: 300px;
  width: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1350px) {
    width: 420px;
  }
  @media (max-width: 500px) {
    width: 320px;
  }
`;

const CardBg2 = styled.div`
  background-image: url('${Card2}');
  min-height: 300px;
  width: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1350px) {
    width: 420px;
  }
  @media (max-width: 500px) {
    width: 320px;
  }
`;
const CardBg3 = styled.div`
  background-image: url('${Card3}');
  min-height: 300px;
  width: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1350px) {
    width: 420px;
  }
  @media (max-width: 500px) {
    width: 320px;
  }
`;
const CardBg4 = styled.div`
  background-image: url('${Card4}');
  min-height: 300px;
  width: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 1350px) {
    width: 420px;
  }
  @media (max-width: 500px) {
    width: 320px;
  }
`;

const BodyCard = styled.div`
  background-color: white;
  padding: 30px;
  width: 400px;
  @media (max-width: 1350px) {
    width: 420px;
  }
  @media (max-width: 500px) {
    width: 320px;
  }
`;

const ServicesCards = () => {
  return (
    <section>
      <Container data-aos='fade-up' data-aos-duration='1000'>
        <WrapperCards>
          <Card>
            <BlockImg>
              <CardBg1></CardBg1>
            </BlockImg>
            <BodyCard>
              <h4>Eligendi omnis sunt veritatis.</h4>
              <p>
                Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat
                deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo
                magnam. Dolor eos et.
              </p>
            </BodyCard>
          </Card>
          <Card>
            <BlockImg>
              <CardBg2></CardBg2>
            </BlockImg>
            <BodyCard>
              <h4>Eligendi omnis sunt veritatis.</h4>
              <p>
                Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat
                deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo
                magnam. Dolor eos et.
              </p>
            </BodyCard>
          </Card>
          <Card>
            <BlockImg>
              <CardBg3></CardBg3>
            </BlockImg>
            <BodyCard>
              <h4>Eligendi omnis sunt veritatis.</h4>
              <p>
                Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat
                deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo
                magnam. Dolor eos et.
              </p>
            </BodyCard>
          </Card>
          <Card>
            <BlockImg>
              <CardBg4></CardBg4>
            </BlockImg>
            <BodyCard>
              <h4>Eligendi omnis sunt veritatis.</h4>
              <p>
                Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat
                deleniti adipisci. Cum delectus doloribus non veritatis. Officia temporibus illo
                magnam. Dolor eos et.
              </p>
            </BodyCard>
          </Card>
        </WrapperCards>
      </Container>
    </section>
  );
};

export default ServicesCards;
