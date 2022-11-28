import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import "./styles.css";
import styled from "styled-components";

const H3 = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: var(--color-secondary);
  text-align: left;
  margin-bottom: 16px;
`;
const H4 = styled.h4`
  font-size: 20px;
  font-weight: 400;
  color: #29486a;
  font-family: var(--font-secondary);
  text-align: left;
  margin-bottom: 16px;
`;
const Text = styled.p`
 font-size: 16px;
  text-align: left;
  margin-bottom: 16px;
`;
const Block = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
          <Block>
            <H3>Let's grow your business together</H3>
            <H4>
              Optio reiciendis accusantium iusto architecto at quia minima
              maiores quidem, dolorum.
            </H4>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, ipsam perferendis asperiores explicabo vel tempore
              velit totam, natus nesciunt accusantium dicta quod quibusdam ipsum
              maiores nobis non, eum. Ullam reiciendis dignissimos laborum aut,
              magni voluptatem velit doloribus quas sapiente optio.
            </Text>
          </Block>
        </SwiperSlide>
        <SwiperSlide>
          <Block>
            <H3>Unde perspiciatis ut repellat dolorem</H3>
            <H4>
              Amet cumque nam sed voluptas doloribus iusto. Dolorem eos aliquam
              quis.
            </H4>
            <Text>
              Dolorem quia fuga consectetur voluptatem. Earum consequatur nulla
              maxime necessitatibus cum accusamus. Voluptatem dolorem ut numquam
              dolorum delectus autem veritatis facilis. Et ea ut repellat ea.
              Facere est dolores fugiat dolor.
            </Text>
          </Block>
        </SwiperSlide>
        <SwiperSlide>
          <Block>
            <H3>Aliquid non alias minus</H3>
            <H4>
              Necessitatibus voluptatibus explicabo dolores a vitae voluptatum.
            </H4>
            <Text>
              Neque voluptates aut. Soluta aut perspiciatis porro deserunt.
              Voluptate ut itaque velit. Aut consectetur voluptatem aspernatur
              sequi sit laborum. Voluptas enim dolorum fugiat aut.
            </Text>
          </Block>
        </SwiperSlide>
        <SwiperSlide>
          <Block>
            <H3>Necessitatibus suscipit non voluptatem quibusdam</H3>
            <H4>
              Tempora quos est ut quia adipisci ut voluptas. Deleniti laborum
              soluta nihil est. Eum similique neque autem ut.
            </H4>
            <Text>
              Ut rerum et autem vel. Et rerum molestiae aut sit vel incidunt sit
              at voluptatem. Saepe dolorem et sed voluptate impedit. Ad et qui
              sint at qui animi animi rerum.
            </Text>
          </Block>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
