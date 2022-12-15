import styled from "styled-components";
import BarComponent from "../Bar/view";
import PostDetails from "../Post/view";

const Container = styled.div`
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  padding: 80px 0;
  display: flex;
  justify-content:center;
  max-width: 1344px;
  @media (max-width: 1350px) {
    flex-wrap: wrap;
  }
`;

const LandingBlogDetails = () => {
  return (
    <section>
    <Container data-aos="fade-up" data-aos-duration="1000">
      <PostDetails />
        <BarComponent />
    </Container>
    </section>
  )
}

export default LandingBlogDetails
