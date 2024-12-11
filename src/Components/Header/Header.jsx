import React from 'react'
import headerCSS from "./../Header/Header.module.css"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css"
import { Autoplay } from 'swiper/modules';
import destnationImg1 from "./../../assets/tour1.jpg"
import destnationImg2 from "./../../assets/tour2.jpg"
import destnationImg3 from "./../../assets/tour3.jpg"
import destnationImg4 from "./../../assets/tour4.jpg"
import destnationImg5 from "./../../assets/tour5.jpg"
import destnationImg6 from "./../../assets/tour6.jpg"



function Header() {
  return (
    <div className={`${headerCSS.header_wrapper} section`}id='home'>
        <div className={headerCSS.imageContainer}>
            <h2>Explore The World,<br/> One Unforgettable Journey.</h2>
        </div>
    <Swiper

        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        autoplay={
            {
                delay:1500,
            }
        }
        breakpoints={
            {
                0:{
                    slidesPerView:1,
                },
                500:{
                    slidesPerView:2,
                },
                768:{
                    slidesPerView:3,
                },
                1024:{
                    slidesPerView:4,
                },
                1200:{
                    slidesPerView:5,
                }
            }
        }
        modules={[Autoplay]}
    
    className={headerCSS.swiper}>
    <SwiperSlide>
        <div className={headerCSS.DestinationsCard}>
            <img src={destnationImg1} alt=""/>
            <h3>China</h3>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className={headerCSS.DestinationsCard}>
            <img src={destnationImg2} alt=""/>
            <h3>India</h3>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className={headerCSS.DestinationsCard}>
            <img src={destnationImg3} alt=""/>
            <h3>Thailand</h3>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className={headerCSS.DestinationsCard}>
            <img src={destnationImg4} alt=""/>
            <h3>Singapore</h3>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className={headerCSS.DestinationsCard}>
            <img src={destnationImg5} alt=""/>
            <h3>Canada</h3>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className={headerCSS.DestinationsCard}>
            <img src={destnationImg6} alt=""/>
            <h3>France</h3>
        </div>
    </SwiperSlide>
    </Swiper>
      
    </div>
  )
}

export default Header