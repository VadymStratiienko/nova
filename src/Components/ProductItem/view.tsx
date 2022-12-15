import { Link } from "react-router-dom";
import styled from "styled-components";
import CorouselItem from "../CorouselItem/view";

const Container = styled.div`
  overflow: hidden;
  padding: 80px 0;
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  max-width: 1320px;
`;
const ContainerCorousel = styled.div`
  max-width: 860px;
  min-width: 350px;
  margin-top: 24px;
  padding: 0 12px;
`;
const Info = styled.div`
max-width: 460px;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  padding: 0 12px;

  @media(max-width:1335px) {
    max-width: 860px;
  }
`;
const PortfolioInfo = styled.div`
  
  padding: 30px;
  box-shadow: 0px 0 30px rgb(27 47 69 / 10%);

  h3 {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #d6e2ef;
  }
  ul {
    list-style: none;
    padding: 0;
    font-size: 15px;

    li {
      margin-top: 10px;
    }
  }
`;
const PLink = styled(Link)`
  color: var(--color-primary);
  text-decoration: none;
  transition: 0.3s;
`;
const PortfolioDescription = styled.div`
  padding-top: 30px;

  h2 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 20px;
    color: var(--color-secondary);
  }
  p {
    padding: 0;
  }
`;

const ProductItem = () => {
  return (
    <section>
      <Container data-aos="fade-up" data-aos-duration="1000">
        <ContainerCorousel>
          <CorouselItem />
        </ContainerCorousel>
        <Info>
          <PortfolioInfo>
            <h3>Project Information</h3>
            <ul>
              <li>
                <strong>Category</strong>: Web design
              </li>
              <li>
                <strong>Client</strong>: ASU Company
              </li>
              <li>
                <strong>Project date</strong>: 01 March, 2020
              </li>
              <li>
                <strong>Project URL</strong>:{" "}
                <PLink to="#">www.example.com</PLink>
              </li>
            </ul>
          </PortfolioInfo>
          <PortfolioDescription>
            <h2>This is an example of portfolio detail</h2>
            <p>
              Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque
              inventore commodi labore quia quia. Exercitationem repudiandae
              officiis neque suscipit non officia eaque itaque enim. Voluptatem
              officia accusantium nesciunt est omnis tempora consectetur
              dignissimos. Sequi nulla at esse enim cum deserunt eius.
            </p>
          </PortfolioDescription>
        </Info>
      </Container>
    </section>
  );
};

export default ProductItem;
