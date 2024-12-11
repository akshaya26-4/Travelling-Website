import React from 'react'
import footerlastCSS from "./../Footer/FooterLast.module.css"

function FooterLast() {
  return (
    <div className={`${footerlastCSS.footerlast_wrapper} section`}>
        <div className={footerlastCSS.top_conatiner}>
            <div className={footerlastCSS.logo}>
                <a href="#">Travel</a>
            </div>
            <div className={footerlastCSS.social}>
                <i className='ri-facebook-line'></i>
                <i className='ri-instagram-line'></i>
                <i className='ri-twitter-x-line'></i>
                <i className='ri-youtube-line'></i>
            </div>
        </div>
        <div className={footerlastCSS.bottom_container}>
                <div className={footerlastCSS.footerLink}>
                    <h3>About Travel</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our History</a></li>
                        <li><a href="#">Reviews</a></li>
                        <li><a href="#">Destinations</a></li>
                        <li><a href="#">Careers</a></li>

                    </ul>
                </div>
                <div className={footerlastCSS.footerLink}>
                    <h3>Destinations</h3>
                    <ul>
                        <li><a href="#">USA</a></li>
                        <li><a href="#">Latin America</a></li>
                        <li><a href="#">Europe</a></li>
                        <li><a href="#">Australia</a></li>
                        <li><a href="#">Asia</a></li>

                    </ul>
                </div>
                <div className={footerlastCSS.footerLink}>
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Request a Quote</a></li>
                        <li><a href="#">Booking Conditions</a></li>
                        <li><a href="#">Recommendations</a></li>

                    </ul>
                </div>
                <div className={footerlastCSS.footerLink}>
                    <h3>Our NewsLetter</h3>
                    <p>It is a journey of discovery, both of the world and oneself. One of the most profound aspects of travelling is the opportunity to explore new cultures.</p>
                <div className={footerlastCSS.input_wrapper}>
                    <input type='email' placeholder='Enter your Email'/>
                    <button>Subscribe</button>
                </div>
                
                </div>
        </div>
    </div>
  )
}

export default FooterLast