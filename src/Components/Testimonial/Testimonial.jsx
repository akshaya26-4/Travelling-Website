import React from 'react'
import testCSS from "./../Testimonial/Testimonial.module.css"
import {Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"

import profile1 from "./../../assets/pro1.jpg"
import profile2 from "./../../assets/pro2.jpg"
import profile3 from "./../../assets/pro3.jpg"
import profile4 from "./../../assets/pro4.jpg"
import profile5 from "./../../assets/pro5.jpg"
import profile6 from "./../../assets/pro6.jpg"
import { Autoplay } from 'swiper/modules'


function Testimonial() {
  return (
    <div className={`${testCSS.test_wrapper} section`}>
        <h2>Exceptional Journey with Travel.</h2>

        <Swiper
        spaceBetween={30}
        slidesPerView={3} 
        loop={true}
        breakpoints={{
            0:{
                slidesPerView:1
            },
            768:{
                slidesPerView:2
            },
            1200:{
                slidesPerView:3
            }
        }}
        autoplay={{
            delay:1500
        }}

        modules={[Autoplay]}
        className={testCSS.swiper}
        >
            <SwiperSlide>
                <div className={testCSS.test_container}>
                    <div className={testCSS.test_profile}>
                        <img src={profile1} alt=''/>
                        <div className={testCSS.details}>
                        <span>
                            John Doe
                        </span>
                        <div className={testCSS.ratings}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-half-fill'></i>
                        <i className='ri-star-line'></i>
                         </div>
                        </div>
                    </div>
                    <p>It was a very good experience, I enjoyed a lot during the trip.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={testCSS.test_container}>
                    <div className={testCSS.test_profile}>
                        <img src={profile2} alt=''/>
                      <div className={testCSS.details}>
                      <span>
                            Jennifer Aniston
                        </span>
                        <div className={testCSS.ratings}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                    </div>
                      </div>
                    </div>
                    <p>It was just an amazing experience,looking forward on other trips too.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={testCSS.test_container}>
                    <div className={testCSS.test_profile}>
                        <img src={profile3} alt=''/>
                        <div className={testCSS.details}>
                        <span>
                            Lisa Kudrow
                        </span>
                        <div className={testCSS.ratings}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-half-fill'></i>
                        <i className='ri-star-line'></i>
                    </div>
                        </div>
                    </div>
                    <p>It was a very good experience, I enjoyed a lot during the trip.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={testCSS.test_container}>
                    <div className={testCSS.test_profile}>
                        <img src={profile4} alt=''/>
                        <div className={testCSS.details}>
                        <span>
                            Mattew Perry
                        </span>
                        <div className={testCSS.ratings}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-half-fill'></i>
                        <i className='ri-star-line'></i>
                        <i className='ri-star-line'></i>
                    </div>
                        </div>
                    </div>
                    <p>It was just an amazing experience,looking forward on other trips too.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={testCSS.test_container}>
                    <div className={testCSS.test_profile}>
                        <img src={profile5} alt=''/>
                        <div className={testCSS.details}>
                        <span>
                            Varun Raj
                        </span>
                        <div className={testCSS.ratings}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-half-fill'></i>
                        <i className='ri-star-line'></i>
                    </div>
                        </div>
                    </div>
                    <p>It was just an amazing experience,looking forward on other trips too.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={testCSS.test_container}>
                    <div className={testCSS.test_profile}>
                        <img src={profile6} alt=''/>
                        <div className={testCSS.details}>
                        <span>
                            Kim So Hyun
                        </span>
                        <div className={testCSS.ratings}>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-fill'></i>
                        <i className='ri-star-half-fill'></i>
                        <i className='ri-star-line'></i>
                    </div>
                        </div>
                    </div>
                    <p>It was just an amazing experience,looking forward on other trips too.</p>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Testimonial