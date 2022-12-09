import styled from "styled-components";
import ServicesCards from "../ServicesCards/view";
import Table from "../Table/view";
import Testimonials from "../Testimonials/view";

const Container = styled.div`
width: 100%;
margin-right: auto;
margin-left: auto;
background-color: white;
position: relative;
overflow: hidden;
--bs-gutter-x: 1.5rem;
--bs-gutter-y: 0;
`;

const LandingServices = () => {
  return (
    <section>
        <Container>
            <Table />
            <ServicesCards />
            <Testimonials />
        </Container>
    </section>
  )
}

export default LandingServices