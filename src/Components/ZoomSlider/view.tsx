import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import styled from "styled-components";
import Modal from "styled-react-modal";
import FocusLock from "react-focus-lock";
import { IoMdClose } from "react-icons/io";
import { BsZoomIn } from "react-icons/bs";

const StyledModal = Modal.styled`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  transition : all 0.3s ease-in-out;
  min-width: 0;
  `;

const Zoom = styled(BsZoomIn)`
  color: rgba(27, 47, 69, 0.7);
  padding-right: 5px;
  cursor: pointer;
  :hover {
    color: var(--color-primary);
  }
`;
const Container = styled.div`
  .swiper {
    margin: 0 auto;

    width: 100%;
    height: 100%;
    max-width: 924px;
    min-width: 350px;
  }
  @media (max-width: 992px) {
    .swiper {
      max-width: 696px;
    }
  }
  @media (max-width: 768px) {
    .swiper {
      max-width: 516px;
    }
  }
  @media (max-width: 600px) {
    .swiper {
      max-width: 450px;
      min-width: 350px;
    }
  }
  @media (max-width: 500px) {
    .swiper {
      max-width: 350px;
    }
  }

  .swiper-slide {
    overflow: hidden;
    transform: none;
    display: flex;
    flex-direction: column;
  }
  .swiper-slide img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  .swiper-slide h4 {
    font-size: 18px;
    font-weight: 400;
    color: var(--color-default);
    background-color: #fff;
  }
  .swiper-button-next {
    position: fixed;
    color: #fff;
  }
  .swiper-button-prev {
    position: fixed;
    color: #fff;
  }
`;
const XIcon = styled(IoMdClose)`
  position: fixed;
  top: 0;
  right: 0;
  color: white;
  font-size: 34px;
  cursor: pointer;
  z-index: 999999999;
`;
const Focus = styled(FocusLock)`
  background: black;
  min-width: 0;
`;

interface IProduct {
  title: string;
  text: string;
  img: string;
  category: string;
}
interface IFiltered {
  filtered: IProduct[];

}

const ZoomSlider = ({ filtered,  }: IFiltered) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedImg, setClickedImg] = useState<null | string>(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    setClickedImg(filtered[0].img);
  };

  return (
    <>
      <Zoom onClick={() => toggleModal()} />
      {clickedImg && (
        <StyledModal
          isOpen={isOpen}
          onEscapeKeydown={() => toggleModal()}
          aria-modal={true}
        >
          <Focus>
            <XIcon onClick={() => toggleModal()} />
            <Container>
              <Swiper
                navigation={true}
                modules={[Navigation]}
                className="ZoomSwiper"
              >
                {filtered.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      {<img src={item.img} alt="" />}
                      <h4>{item.title}</h4>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Container>
          </Focus>
        </StyledModal>
      )}
    </>
  );
};

export default ZoomSlider;
