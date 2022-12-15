import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import Testimonials1 from "../../assets/img/testimonials/testimonials-1.jpg";
import Testimonials2 from "../../assets/img/testimonials/testimonials-2.jpg";
import Testimonials3 from "../../assets/img/testimonials/testimonials-3.jpg";
import Testimonials4 from "../../assets/img/testimonials/testimonials-4.jpg";
import Testimonials5 from "../../assets/img/testimonials/testimonials-5.jpg";
import { BsFillStarFill } from "react-icons/bs";

const Container = styled.div`
  overflow: hidden;
  padding: 80px 0;
  margin: 0 auto;
  margin-left: auto;
  margin-right: auto;

  .swiper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: white;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: white;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 100px;
    left: 0;
    width: 100%;
  }

  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 0;
    left: 0;
    width: 100%;
  }

  .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: white;
 padding: 0;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
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
      content: "";
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
const Star = styled(BsFillStarFill)`
  color: #ffc107;
  margin: 0 1px;
`;
const Text = styled.p`
  font-style: italic;
  margin: 0 auto 15px auto;
`;
const Item = styled.div`
  width: 500px;
  box-sizing: content-box;
  padding: 30px;
  margin: 40px 30px;
  box-shadow: 0px 0 20px rgb(27 47 69 / 10%);
  background: #fff;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: 0.3s;
`;
const Info = styled.div`
  margin-top: auto;

  img {
    width: 90px;
    border-radius: 50%;
    border: 4px solid #fff;
    margin: 0 auto;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0 5px 0;
    color: #111;
  }
  h4 {
    font-size: 14px;
    color: #999;
    margin: 0;
  }
`;

const Testimonials = () => {
  return (
    <section>
      <Container>
        <SectionHeader data-aos="fade-up" data-aos-duration="1000">
          <h2>Testimonials</h2>
        </SectionHeader>
        <>
          <Swiper
            rewind={true}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper2"
          >
            <SwiperSlide data-aos="fade-up" data-aos-duration="1000">
              <Item>
                <div>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <Text>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                </Text>
                <Info>
                  <img src={Testimonials1} alt="" />
                  <h3>Saul Goodman</h3>
                  <h4>Ceo &amp; Founder</h4>
                </Info>
              </Item>
            </SwiperSlide>
            <SwiperSlide data-aos="fade-up" data-aos-duration="1000">
              <Item>
                <div>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <Text>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                </Text>
                <Info>
                  <img src={Testimonials2} alt="" />
                  <h3>Sara Wilsson</h3>
                  <h4>Designer</h4>
                </Info>
              </Item>
            </SwiperSlide>
            <SwiperSlide data-aos="fade-up" data-aos-duration="1000">
              <Item>
                <div>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <Text>
                  Enim nisi quem export duis labore cillum quae magna enim sint
                  quorum nulla quem veniam duis minim tempor labore quem eram
                  duis noster aute amet eram fore quis sint minim.
                </Text>
                <Info>
                  <img src={Testimonials3} alt="" />
                  <h3>Jena Karlis</h3>
                  <h4>Store Owner</h4>
                </Info>
              </Item>
            </SwiperSlide>
            <SwiperSlide data-aos="fade-up" data-aos-duration="1000">
              <Item>
                <div>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <Text>
                  Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                  multos export minim fugiat minim velit minim dolor enim duis
                  veniam ipsum anim magna sunt elit fore quem dolore labore
                  illum veniam.
                </Text>
                <Info>
                  <img src={Testimonials4} alt="" />
                  <h3>Matt Brandon</h3>
                  <h4>Freelancer</h4>
                </Info>
              </Item>
            </SwiperSlide>
            <SwiperSlide data-aos="fade-up" data-aos-duration="1000">
              <Item>
                <div>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <Text>
                  {" "}
                  Quis quorum aliqua sint quem legam fore sunt eram irure aliqua
                  veniam tempor noster veniam enim culpa labore duis sunt culpa
                  nulla illum cillum fugiat legam esse veniam culpa fore nisi
                  cillum quid.
                </Text>
                <Info>
                  <img src={Testimonials5} alt="" />
                  <h3>John Larson</h3>
                  <h4>Entrepreneur</h4>
                </Info>
              </Item>
            </SwiperSlide>
          </Swiper>
        </>
      </Container>
    </section>
  );
};

export default Testimonials;
