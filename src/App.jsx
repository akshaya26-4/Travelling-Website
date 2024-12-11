import React from 'react'
import "./App.css"
import Nav from './Components/Nav/Nav'
import Header from './Components/Header/Header'
import Memories from './Components/Memories/Memories'
import Trips from './Components/Trips/Trips'
import Searches from './Components/Searches/Searches'
import About from './Components/About/About'
import Testimonial from './Components/Testimonial/Testimonial'
import Destinations from './Components/Destinations/Destinations'
import Footer from './Components/Footer/Footer'
import FooterLast from './Components/Footer/FooterLast'

function App() {
  return (
    <>
    <div className='main'>
    <Nav/>
    <Header/>
    <Memories/>
    
    </div>
    <Trips/>
    <Searches/>
    <div className='main'>
    <About/>
    </div>
    <Testimonial/>
    <Destinations/>
    <div className='main'>
    <Footer/>
    </div>
    <FooterLast/>

    
    </>
  )
}

export default App