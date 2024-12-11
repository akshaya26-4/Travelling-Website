import React from 'react'
import aboutCSS from "./../About/About.module.css"
import abtImg from "./../../assets/abtImg.jpg"
import abtImg2 from "./../../assets/abtImg2.jpg"

function About() {
  return (
    <div className={`${aboutCSS.about_wrapper} section`} id='about'>
        <div className={aboutCSS.about_image}>
          <img src={abtImg} alt='about image'/>
          <img src={abtImg2} alt='about image'/>
        </div>
        <div className={aboutCSS.about_content}>
          <h2>Discover Organized <br/> Adventures the ,<br/>
            Ultimate Travel Hack
          </h2>
          <p>Traveling is an important part of personal development and growth that can help people learn, explore, and discover new things. One of the most profound aspects of travelling is the opportunity to explore new cultures. Immersing oneself in different traditions, cuisines, and languages opens one's mind to the rich tapestry of humanity.Traveling can help people discover new things about themselves and the world around them.</p>
       <div className={aboutCSS.about}>
        <p><i className='ri-building-4-line'>Accommodation</i></p>
        <p><i className='ri-car-line'>Transportation Allowance</i></p>
        <p><i className='ri-magic-line'>Exclusive Experiences</i></p>
        <p><i className='ri-instance-line'>Local Recommendations</i></p>
        <p><i className='ri-pin-distance-line'>Personalized trip crafting</i></p>
        <p><i className='ri-phone-line'>24/7 Support</i></p>
        
       
       </div>
       
        </div>
        </div>
  )
}

export default About