import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import styled from "styled-components";
import App from "../../assets/img/portfolio/app-1.jpg"
import Branding from "../../assets/img/portfolio/branding-1.jpg";
import Book from "../../assets/img/portfolio/books-1.jpg";
import Product from "../../assets/img/portfolio/product-1.jpg";

const Container = styled.div`
display: flex;
flex-wrap: wrap;
.swiper {
    max-width: 100%;
    max-height: 100%;
  }
  
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
  
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
  
  .swiper-slide img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }
  
 .swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 0;
  left: 20;
  width: 100%;
}
`;


  
 

function CorouselItem() {
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="CorouselItem"
      >
        <SwiperSlide>
            <img src={App} alt="App" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Branding} alt="Branding" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Product} alt="Product" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={Book} alt="Book" />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}

export default CorouselItem;
