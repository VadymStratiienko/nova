import styled from "styled-components";
import {
  BsBarChart,
  BsBinoculars,
  BsBriefcase,
  BsBrightnessHigh,
  BsCalendar4Week,
  BsCardChecklist,
} from "react-icons/bs";

const Container = styled.div`
  padding-bottom: 80px;
  overflow: hidden;
  padding: 80px 0;
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width:1320px;
`;
const BlockHeader = styled.div`
  text-align: center;
  h2 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
  }
`;

const TableGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media (max-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`;

const Block = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  --bs-gutter-y: 3rem;
  padding-right: calc(var(--bs-gutter-x) * 1);
  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;
const BlockText = styled.div``;
const Briefcase = styled(BsBriefcase)`
  font-size: 32px;
  line-height: 0;
  margin-right: 20px;
  color: #f57813;
`;
const CardChecklist = styled(BsCardChecklist)`
  font-size: 32px;
  line-height: 0;
  margin-right: 20px;
  color: #15a04a;
`;
const BarChart = styled(BsBarChart)`
  font-size: 32px;
  line-height: 0;
  margin-right: 20px;
  color: #d90769;
`;
const Binoculars = styled(BsBinoculars)`
  font-size: 32px;
  line-height: 0;
  margin-right: 20px;
  color: #15bfbc;
`;
const BrightnessHigh = styled(BsBrightnessHigh)`
  font-size: 32px;
  line-height: 0;
  margin-right: 20px;
  color: #f5cf13;
`;
const Calendar4Week = styled(BsCalendar4Week)`
  font-size: 32px;
  line-height: 0;
  margin-right: 20px;
  color: #1335f5;
`;
const BlockIcon = styled.div`
  display: flex;
  flex-shrink: 0;
`;
const H4 = styled.h4`
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 18px;
`;
const Link = styled.a`
  color: var(--color-secondary);
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;
`;
const Text = styled.p`
  line-height: 24px;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Table = () => {
  return (
    <section>
    <Container>
      <BlockHeader data-aos="fade-up" data-aos-duration="1000">
        <h2>Our Services</h2>
      </BlockHeader>
      <TableGrid data-aos="fade-up" data-aos-duration="1000">
        <Block>
          <BlockIcon>
            <Briefcase />
          </BlockIcon>
          <BlockText>
            <H4>
              <Link href="#">Lorem Ipsum</Link>
            </H4>
            <Text>
              Voluptatum deleniti atque corrupti quos dolores et quas molestias
              excepturi sint occaecati cupiditate non provident
            </Text>
          </BlockText>
        </Block>

        <Block>
          <BlockIcon>
            <CardChecklist />
          </BlockIcon>
          <BlockText>
            <H4>
              <Link href="#">Dolor Sitema</Link>
            </H4>
            <Text>
              Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat tarad limino ata
            </Text>
          </BlockText>
        </Block>

        <Block>
          <BlockIcon>
            <BarChart />
          </BlockIcon>
          <BlockText>
            <H4>
              <Link href="#">Sed ut perspiciatis</Link>
            </H4>
            <Text>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur
            </Text>
          </BlockText>
        </Block>

        <Block>
          <BlockIcon>
            <Binoculars />
          </BlockIcon>
          <BlockText>
            <H4>
              <Link href="#">Magni Dolores</Link>
            </H4>
            <Text>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </Text>
          </BlockText>
        </Block>

        <Block>
          <BlockIcon>
            <BrightnessHigh />
          </BlockIcon>
          <BlockText>
            <H4>
              <Link href="#">Nemo Enim</Link>
            </H4>
            <Text>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque
            </Text>
          </BlockText>
        </Block>

        <Block>
          <BlockIcon>
            <Calendar4Week />
          </BlockIcon>
          <BlockText>
            <H4>
              <Link href="#">Eiusmod Tempor</Link>
            </H4>
            <Text>
              Et harum quidem rerum facilis est et expedita distinctio. Nam
              libero tempore, cum soluta nobis est eligendi
            </Text>
          </BlockText>
        </Block>
      </TableGrid>
    </Container>
    </section>
  );
};

export default Table;
