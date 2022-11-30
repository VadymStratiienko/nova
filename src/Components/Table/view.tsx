import styled from "styled-components";
import {
  BsBarChart,
  BsBinoculars,
  BsBriefcase,
  BsBrightnessHigh,
  BsCalendar4Week,
  BsCardChecklist,
} from "react-icons/bs";

const TableGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-right: calc(11.6 * var(--bs-gutter-x));
  margin-left: calc(11.6 * var(--bs-gutter-x));
  padding-bottom: 80px;
`;
const Block = styled.div`
  display: flex;
  flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    --bs-gutter-y: 3rem;
    padding-right: calc(var(--bs-gutter-x) * 1);
    padding-left: calc(var(--bs-gutter-x) * 1);
    margin-top: var(--bs-gutter-y);
`;
const BlockText = styled.div`

`
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

  ::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
 
  }
`;

const Text = styled.p`
  line-height: 24px;
    font-size: 14px;
    margin-top: 0;
    margin-bottom: 1rem;
`

const Table = () => {
  return (
    <TableGrid>
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
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi
          </Text>
        </BlockText>
      </Block>
    </TableGrid>
  );
};

export default Table;
