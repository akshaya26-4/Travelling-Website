import React from 'react'
import footerCSS from "./../Footer/Footer.module.css"

function Footer() {
  return (
    <div className={`${footerCSS.footer_wrapper} section`}>
        <h2>Explore Iconic Popular Destination <br/>
            With Expert Insides
        </h2>
        <button>Book Adventures</button>
        
    </div>
  )
}

export default Footer