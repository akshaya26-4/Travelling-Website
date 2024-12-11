import React from 'react'
import destCSS from "./../Destinations/Destinations.module.css"
import dest1 from "./../../assets/dest1.jpg"
import dest2 from "./../../assets/dest2.jpg"
import dest3 from "./../../assets/dest3.jpg"
import dest4 from "./../../assets/dest4.jpg"
import dest5 from "./../../assets/dest5.jpg"
import dest6 from "./../../assets/dest6.jpg"



function Destinations() {
  return (
    <div className={`${destCSS.dest_wrapper} section`} id='populardestinations'>
        <h2>
        Popular Destinations
        </h2>
        <div className={destCSS.cards}>
            <div className={destCSS.card}>
                <img src={dest1} alt='destination image'/>
                <div className={destCSS.details}>
                    <h3>Europe</h3>
                    <div className={destCSS.btns}>
                        <a href="#">All Destinations</a>
                        <a href="#">Deals</a>
                         
                    </div>
                </div>
            </div>
            <div className={destCSS.card}>
                <img src={dest2} alt='destination image'/>
                <div className={destCSS.details}>
                    <h3>Asia</h3>
                    <div className={destCSS.btns}>
                        <a href="#">All Destinations</a>
                        <a href="#">Deals</a>
                         
                    </div>
                </div>
            </div>
            <div className={destCSS.card}>
                <img src={dest3} alt='destination image'/>
                <div className={destCSS.details}>
                    <h3>North America</h3>
                    <div className={destCSS.btns}>
                        <a href="#">All Destinations</a>
                        <a href="#">Deals</a>
                         
                    </div>
                </div>
            </div>
            <div className={destCSS.card}>
                <img src={dest4} alt='destination image'/>
                <div className={destCSS.details}>
                    <h3>Latin America</h3>
                    <div className={destCSS.btns}>
                        <a href="#">All Destinations</a>
                        <a href="#">Deals</a>
                         
                    </div>
                </div>
            </div>
            <div className={destCSS.card}>
                <img src={dest5} alt='destination image'/>
                <div className={destCSS.details}>
                    <h3>Australia</h3>
                    <div className={destCSS.btns}>
                        <a href="#">All Destinations</a>
                        <a href="#">Deals</a>
                         
                    </div>
                </div>
            </div>
            <div className={destCSS.card}>
                <img src={dest6} alt='destination image'/>
                <div className={destCSS.details}>
                    <h3>Africa</h3>
                    <div className={destCSS.btns}>
                        <a href="#">All Destinations</a>
                        <a href="#">Deals</a>
                         
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Destinations