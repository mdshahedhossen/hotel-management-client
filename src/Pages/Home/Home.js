import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard,Autoplay, Scrollbar, Navigation, Pagination } from "swiper";
const Home = () => {
    return (
        <div>
            <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard,Autoplay,Scrollbar, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-screen h-5/6" src="https://hotelthecoxtoday.com/img/accommodaton/presidential-details/presidential1.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-screen h-5/6" src="https://hotelthecoxtoday.com/img/accommodaton/presidential-details/presidential2.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-screen h-5/6" src="https://hotelthecoxtoday.com/img/accommodaton/presidential-details/presidential3.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-screen h-5/6" src="https://hotelthecoxtoday.com/img/accommodaton/presidential-details/presidential4.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-screen h-5/6" src="https://hotelthecoxtoday.com/img/accommodaton/presidential-details/presidential5.jpg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-screen h-5/6" src="https://hotelthecoxtoday.com/img/accommodaton/presidential-details/presidential6.jpg" alt=""/>
        </SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Home;