import styled from "styled-components";
import {
  RiBarChartBoxLine,
  RiBaseStationLine,
  RiCalendarTodoLine,
  RiDatabase2Line,
  RiFileList3Line,
  RiGradienterLine,
  RiPaintBrushLine,
  RiStoreLine,
} from "react-icons/ri";
import Iphpne from "../../assets/img/iphone.png";

const Container = styled.div`
  width: 100%;
  
  margin-right: auto;
  margin-left: auto;
  margin: 0 auto;
  padding-bottom: 0;
  overflow: hidden;
  padding: 80px 0;
`;

const TopBlock = styled.div`
max-width:1320px;
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  
  h3 {
    color: var(--color-secondary);
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 30px;
    font-family: var(--font-primary);
  }

`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(8, 1fr);
  }
`;
const StoreLine = styled(RiStoreLine)`
  color: #ffbb2c;
  margin-right: 10px;
  font-size: 24px;
  line-height: 1.2;
`;
const BarChartBoxLine = styled(RiBarChartBoxLine)`
  color: #5578ff;
  margin-right: 10px;
  font-size: 24px;
  line-height: 1.2;
`;
const CalendarTodoLine = styled(RiCalendarTodoLine)`
  color: #e80368;
  margin-right: 10px;
  font-size: 24px;
  line-height: 1.2;
`;
const PaintBrushLine = styled(RiPaintBrushLine)`
  color: #e361ff;
  margin-right: 10px;
  font-size: 24px;
  line-height: 1.2;
`;
const Database2Line = styled(RiDatabase2Line)`
  color: #47aeff;
  margin-right: 10px;
  font-size: 24px;
  line-height: 1.2;
`;
const GradienterLine = styled(RiGradienterLine)`
  color: #ffa76e;
  margin-right: 10px;
  font-size: 24px;
  line-height: 1.2;
`;
const FileList3Line = styled(RiFileList3Line)`
  color: #11dbcf;
  margin-right: 10px;
  font-size: 24px;
  line-height: 1.2;
`;
const BaseStationLine = styled(RiBaseStationLine)`
  color: #ff5828;
  margin-right: 10px;
  font-size: 24px;
  line-height: 1.2;
`;
const Row = styled.div`
display: flex; 
position: relative;
  @media (max-width:1024px){

  }
  @media (max-width: 992px) {
   
  }
  @media (max-width: 768px) {
    display: flex; 
flex-wrap: wrap;
justify-content: center;
  }
`;
const PhoneWrapper = styled.div`
z-index: 2;
position: absolute;
    right: 0;
    img {
    width: 340px;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    @media (max-width: 992px) {
     z-index: 2;
     margin-top: 330px;
  }  
  @media (max-width: 768px) {
    height: auto;
    max-width: 100%;
 margin-top:30px;

  }
  }
  @media (max-width: 768px) {
    position: relative;
 margin-top:0;
 width: 100%;
 display: flex;
 justify-content: center
  }
`
const Block = styled.div`

  span {
    font-size: 18px;
    color: #29486a;
  }
`;
const Box = styled.div`
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: -1.5rem;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
`;
const Details = styled.div`
margin-top: 80px;
  padding: 120px 0;
  background-color: #f7f9fc;
`;
const DetailRow = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
flex-wrap: wrap;
  --bs-gutter-x: 1.5rem;
  width: 100%;
  max-width: 700px;
  padding-left: calc(var(--bs-gutter-x) * 12.5);
  @media (max-width: 992px) {
    max-width: 400px;
  }
  @media (max-width: 768px) {
    max-width: 300px;
    justify-content: center;
    align-items: center;
  }

  h4 {
    color: var(--color-secondary);
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
    font-size: 15px;
  }
  a {
    font-family: var(--font-primary);
    display: inline-block;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 1px;
    padding: 10px 32px;
    border-radius: 50px;
    transition: 0.5s;
    background-color: var(--color-primary);
    color: #fff;
    text-decoration: none;
  }
  @media (max-width: 1680px) {
    padding-left: calc(var(--bs-gutter-x) * 6);
  }
  @media (max-width: 1590px) {
    padding-left: calc(var(--bs-gutter-x) * 5);
  }
  @media (max-width: 1380px) {
    padding-left: calc(var(--bs-gutter-x) * 4);
  }
  @media (max-width: 1278px) {
    padding-left: calc(var(--bs-gutter-x) * 3);
    max-width: 570px;
  }
  @media (max-width: 1200px) {
    padding-left: calc(var(--bs-gutter-x) * 1.2);
  }

  @media (max-width: 992px) {
    padding-left: calc(var(--bs-gutter-x) * 1);
  }
  @media (max-width: 768px) {
    padding-left: calc(var(--bs-gutter-x) * 1);
    text-align: center;
  }
`;
const Features = () => {
  return (
    <section>
      <Container data-aos="fade-up" data-aos-duration="1000">
        <TopBlock>
          <Row>
            <div>
              <h3>
                Powerful Features for <br />
                Your Business
              </h3>
              <Grid>
                <Block>
                  <Box>
                    <StoreLine />
                    <span>Easy Cart Features</span>
                  </Box>
                </Block>

                <Block>
                  <Box>
                    <BarChartBoxLine />
                    <span>Sit amet consectetur adipisicing</span>
                  </Box>
                </Block>

                <Block>
                  <Box>
                    <CalendarTodoLine />
                    <span>Ipsum Rerum Explicabo</span>
                  </Box>
                </Block>

                <Block>
                  <Box>
                    <PaintBrushLine />
                    <span>Easy Cart Features</span>
                  </Box>
                </Block>

                <Block>
                  <Box>
                    <Database2Line />
                    <span>Easy Cart Features</span>
                  </Box>
                </Block>

                <Block>
                  <Box>
                    <GradienterLine />
                    <span>Sit amet consectetur adipisicing</span>
                  </Box>
                </Block>

                <Block>
                  <Box>
                    <FileList3Line />
                    <span>Ipsum Rerum Explicabo</span>
                  </Box>
                </Block>

                <Block>
                  <Box>
                    <BaseStationLine />
                    <span>Easy Cart Features</span>
                  </Box>
                </Block>
              </Grid>
            </div>
            <PhoneWrapper>
              <img src={Iphpne} alt="" />
            </PhoneWrapper>
          </Row>
        </TopBlock>
        <Details>
          <DetailRow>
            <h4>
              Labore Sdio Lidui
              <br />
              Bonde Naruto
            </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              nostrum molestias doloremque quae delectus odit minima corrupti
              blanditiis quo animi!
            </p>
            <a href="#about">Get Started</a>
          </DetailRow>
        </Details>
      </Container>
    </section>
  );
};

export default Features;
