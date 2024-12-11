import React from 'react'
import searchCSS from "./../Searches/Searches.module.css"
function Searches() {
  return (
    <div className={`${searchCSS.search_wrapper} section`}id='searches'>
      <h2>Popular Searches</h2>
      <div className={searchCSS.cards}>
        <div className={searchCSS.card}>
          <i className='ri-search-line'></i>

          <h3>Domestic Trips <span>See America In a New Light</span></h3>
        </div>
       
        
        <div className={searchCSS.card}>
          <i className='ri-search-line'></i>

          <h3>Past Guests Benefits <span>Saving with Global Tour Rewards</span></h3>
        </div>
        <div className={searchCSS.card}>
          <i className='ri-search-line'></i>

          <h3>Offer for Travelling Groups <span>Save When you 9+ Guests</span></h3>
        </div>
        <div className={searchCSS.card}>
          <i className='ri-search-line'></i>

          <h3>Vacation in 14 Days <span>Limited Availability and Selling Fast</span></h3>
        </div>
       

        <div className={searchCSS.card}>
          <i className='ri-search-line'></i>

          <h3>Tours Under $2000 <span>Browse Our Value Vacations</span></h3>
        </div>
        <div className={searchCSS.card}>
          <i className='ri-search-line'></i>

          <h3>Past Guests Benefits <span>Saving with Global Tour Rewards</span></h3>
        </div>
       
      </div>
      </div>
  )
}

export default Searches