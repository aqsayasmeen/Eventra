import React from 'react'
import Navbar from '../components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/effect-coverflow';
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import { Navigation, Pagination, Scrollbar, A11y ,EffectCoverflow} from "swiper";

import SwiperCore, { Pagination, EffectCoverflow } from "swiper";
import Footer from '../components/Footer';
import About from './About';
import Services from './Services';
import Price from './Price';
import Contact from './Contact';
SwiperCore.use([Pagination, EffectCoverflow])

export default function Home() {
  const swipe = [{
    img: "images/slide-1.jpg"
  },
  {
    img: "images/slide-2.jpg"
  },
  {
    img: "images/slide-2.jpg"
  },
  {
    img: "images/slide-2.jpg"
  },
  {
    img: "images/slide-2.jpg"
  },
  {
    img: "images/slide-2.jpg"
  }, {
    img: 'images/slide-3.jpg'
  }, {
    img: 'images/slide-4.jpg'
  }, {
    img: 'images/slide-5.jpg'
  }, {
    img: 'images/slide-6.jpg'
  }]
  return (
    <>
      <Navbar/>
    <div>
      <section className="home" id="home">
        <div className="content">
          <h3>its time to celebrate! the best <span> event organizers </span></h3>
          <a href="#contact" className="btn">contact us</a>
        </div>
        {/* 
<div className="swiper-container home-slider">
    <div className="swiper-wrapper">
        <div className="swiper-slide"><img src="images/slide-1.jpg" alt=""/></div>
        <div className="swiper-slide"><img src="images/slide-2.jpg" alt=""/></div>
        <div className="swiper-slide"><img src="images/slide-3.jpg" alt=""/></div>
        <div className="swiper-slide"><img src="images/slide-4.jpg" alt=""/></div>
        <div className="swiper-slide"><img src="images/slide-5.jpg" alt=""/></div>
        <div className="swiper-slide"><img src="images/slide-6.jpg" alt=""/></div>
    </div>
</div> */}
        <div>
          <Swiper
            effect="coverflow"
            grabCursor="true"
            centeredSlides="true"
            spaceBetween={20}
            slidesPerView={4}
            loop="true"
            pagination={{ clickable: true, dynamicBullets: true }}
            coverflowEffect={{
              rotate: 20,
              stretch: 25,
              depth: 250,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              700: {
                spaceBetween: 0,
                slidesPerView: 4,
              },
              500: {
                spaceBetween: 100,
                slidesPerView: 2,
              },
              411: {
                spaceBetween: 100,
                slidesPerView: 2,
              },
              300: {
                spaceBetween: 0,
                slidesPerView: 1,
              },
            }}
          // modules={[Navigation]}
          // spaceBetween={100}
          // slidesPerView={'auto'}
          // centeredSlides={'true'}
          // navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
          >
            {swipe.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.img} style={{ width: "100%", height: 500 }} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
    
    <Services/>
    <About/>
    <Price/>
    <Contact/>
    <Footer/>
    </>
  )
}
