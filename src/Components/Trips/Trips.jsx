import React from 'react'
import tripCSS from "./../Trips/Trips.module.css"
import tripImg1 from "./../../assets/trip1.jpg"
import tripImg2 from "./../../assets/trip2.jpg"
import tripImg3 from "./../../assets/trip3.jpg"
import tripImg4 from "./../../assets/trip4.jpg"
import tripImg5 from "./../../assets/trip5.jpg"
import tripImg6 from "./../../assets/trip6.jpg"
import tripImg7 from "./../../assets/trip7.jpg"
import tripImg8 from "./../../assets/trip8.jpg"




function Trips() {
  return (
    <div className={`${tripCSS.trip_wrapper} section`}id='trips'>
        <h2>Popular Trips</h2>

        <div className={tripCSS.cards}>
            <div className={tripCSS.card}>
                <img src={tripImg1} alt=''/>
                <div className={tripCSS.tripContent}>
                    <div className={tripCSS.tripRating}>
                    <i className='ri-star-fill'></i>    
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-half-fill'></i>
                    </div>
                    <h3>Australia</h3>
                    <div className={tripCSS.tripDetails}>
                        <span><i className='ri-calendar-line'>7 Days</i></span>
                        <span><i className='ri-map-pin-line'>5 Places</i></span>
                        <span><i className='ri-flag-line'>Australia</i></span>
                    </div>
                    <div className={tripCSS.pricing}>
                        <span className={tripCSS.price}>$1,200</span>
                        <button className={tripCSS.book}>Book Now</button>
                    </div>
                </div>
            </div>
        
            <div className={tripCSS.card}>
                <img src={tripImg2} alt=''/>
                <div className={tripCSS.tripContent}>
                    <div className={tripCSS.tripRating}>
                    <i className='ri-star-fill'></i>    
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-half-fill'></i>
                    <i className='ri-star-line'></i>

                    </div>
                    <h3>France</h3>
                    <div className={tripCSS.tripDetails}>
                        <span><i className='ri-calendar-line'>5 Days</i></span>
                        <span><i className='ri-map-pin-line'>10 Places</i></span>
                        <span><i className='ri-flag-line'>France</i></span>
                    </div>
                    <div className={tripCSS.pricing}>
                        <span className={tripCSS.price}>$1,800</span>
                        <button className={tripCSS.book}>Book Now</button>
                    </div>
                </div>
            </div>
        
       
            <div className={tripCSS.card}>
                <img src={tripImg3} alt=''/>
                <div className={tripCSS.tripContent}>
                    <div className={tripCSS.tripRating}>
                    <i className='ri-star-fill'></i>    
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-half-fill'></i>
                    </div>
                    <h3>Italy</h3>
                    <div className={tripCSS.tripDetails}>
                        <span><i className='ri-calendar-line'>9 Days</i></span>
                        <span><i className='ri-map-pin-line'>15 Places</i></span>
                        <span><i className='ri-flag-line'>Italy</i></span>
                    </div>
                    <div className={tripCSS.pricing}>
                        <span className={tripCSS.price}>$1,980</span>
                        <button className={tripCSS.book}>Book Now</button>
                    </div>
                </div>
            </div>
       
       
            <div className={tripCSS.card}>
                <img src={tripImg4} alt=''/>
                <div className={tripCSS.tripContent}>
                    <div className={tripCSS.tripRating}>
                    <i className='ri-star-fill'></i>    
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    </div>
                    <h3>Canyonlands</h3>
                    <div className={tripCSS.tripDetails}>
                        <span><i className='ri-calendar-line'>5 Days</i></span>
                        <span><i className='ri-map-pin-line'>8 Places</i></span>
                        <span><i className='ri-flag-line'>Canyonlands</i></span>
                    </div>
                    <div className={tripCSS.pricing}>
                        <span className={tripCSS.price}>$1,620</span>
                        <button className={tripCSS.book}>Book Now</button>
                    </div>
                </div>
            </div>
        
    
            <div className={tripCSS.card}>
                <img src={tripImg5} alt=''/>
                <div className={tripCSS.tripContent}>
                    <div className={tripCSS.tripRating}>
                    <i className='ri-star-fill'></i>    
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    </div>
                    <h3>India</h3>
                    <div className={tripCSS.tripDetails}>
                        <span><i className='ri-calendar-line'>10 Days</i></span>
                        <span><i className='ri-map-pin-line'>15 Places</i></span>
                        <span><i className='ri-flag-line'>India</i></span>
                    </div>
                    <div className={tripCSS.pricing}>
                        <span className={tripCSS.price}>$2,420</span>
                        <button className={tripCSS.book}>Book Now</button>
                    </div>
                </div>
            </div>
    
      
            <div className={tripCSS.card}>
                <img src={tripImg6} alt=''/>
                <div className={tripCSS.tripContent}>
                    <div className={tripCSS.tripRating}>
                    <i className='ri-star-fill'></i>    
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-half-fill'></i>
                    </div>
                    <h3>China</h3>
                    <div className={tripCSS.tripDetails}>
                        <span><i className='ri-calendar-line'>6 Days</i></span>
                        <span><i className='ri-map-pin-line'>18 Places</i></span>
                        <span><i className='ri-flag-line'>China</i></span>
                    </div>
                    <div className={tripCSS.pricing}>
                        <span className={tripCSS.price}>$3,420</span>
                        <button className={tripCSS.book}>Book Now</button>
                    </div>
                </div>
            </div>
      
       
            <div className={tripCSS.card}>
                <img src={tripImg7} alt=''/>
                <div className={tripCSS.tripContent}>
                    <div className={tripCSS.tripRating}>
                    <i className='ri-star-fill'></i>    
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-half-fill'></i>
                    <i className='ri-star-line'></i>


                    </div>
                    <h3>Singapore</h3>
                    <div className={tripCSS.tripDetails}>
                        <span><i className='ri-calendar-line'>4 Days</i></span>
                        <span><i className='ri-map-pin-line'>7 Places</i></span>
                        <span><i className='ri-flag-line'>Singapore</i></span>
                    </div>
                    <div className={tripCSS.pricing}>
                        <span className={tripCSS.price}>$2,320</span>
                        <button className={tripCSS.book}>Book Now</button>
                    </div>
                </div>
            </div>
    
       
            <div className={tripCSS.card}>
                <img src={tripImg8} alt=''/>
                <div className={tripCSS.tripContent}>
                    <div className={tripCSS.tripRating}>
                    <i className='ri-star-fill'></i>    
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-fill'></i>
                    <i className='ri-star-line'></i>


                    </div>
                    <h3>Dubai</h3>
                    <div className={tripCSS.tripDetails}>
                        <span><i className='ri-calendar-line'>5 Days</i></span>
                        <span><i className='ri-map-pin-line'>8 Places</i></span>
                        <span><i className='ri-flag-line'>Dubai</i></span>
                    </div>
                    <div className={tripCSS.pricing}>
                        <span className={tripCSS.price}>$1,320</span>
                        <button className={tripCSS.book}>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Trips