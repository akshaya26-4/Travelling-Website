import React from 'react'
import memoriesCSS from "./../Memories/Memories.module.css"
import MemoriesImg1 from "./../../assets/people1.jpg"
import MemoriesImg2 from "./../../assets/people2.jpg"
import MemoriesImg3 from "./../../assets/people4.jpg"
import MemoriesImg4 from "./../../assets/people3.jpg"
import MemoriesImg5 from "./../../assets/people5.jpg"
import MemoriesImg6 from "./../../assets/people6.jpg"
import MemoriesImg7 from "./../../assets/people7.jpg"



function Memories() {
  return (
    <div className={`${memoriesCSS.Memories_wrapper} section`}id='memories'>
      <div className={memoriesCSS.memoriesCard}>
        <img src={MemoriesImg1} alt="Memories-img"/>

        <div className={memoriesCSS.content}>
          <h3>Small Groups Departures</h3>
          <a href="#">View Tours</a>
        </div>
      </div>
      <div className={memoriesCSS.memoriesCard}>
        <img src={MemoriesImg2} alt="Memories-img"/>

        <div className={memoriesCSS.content}>
          <h3>Affordable Dreams</h3>
          <a href="#">View Tours</a>
        </div>
      </div>
      <div className={memoriesCSS.memoriesCard}>
        <img src={MemoriesImg3} alt="Memories-img"/>

        <div className={memoriesCSS.content}>
          <h3>Undiscovers Tours</h3>
          <a href="#">View Tours</a>
        </div>
      </div>
      <div className={memoriesCSS.memoriesCard}>
        <img src={MemoriesImg4} alt="Memories-img"/>

        <div className={memoriesCSS.content}>
          <h3>Let Our Experts Plan <br/> Your 2024 Journey</h3>
          <button>View Tours</button>
        </div>
      </div>
      <div className={memoriesCSS.memoriesCard}>
        <img src={MemoriesImg5} alt="Memories-img"/>

        <div className={memoriesCSS.content}>
          <h3>Religious Tours</h3>
          <a href="#">View Tours</a>
        </div>
      </div>
      <div className={memoriesCSS.memoriesCard}>
        <img src={MemoriesImg6} alt="Memories-img"/>

        <div className={memoriesCSS.content}>
          <h3>Solo Travel</h3>
          <a href="#">View Tours</a>
        </div>
      </div>
      <div className={memoriesCSS.memoriesCard}>
        <img src={MemoriesImg7} alt="Memories-img"/>

        <div className={memoriesCSS.content}>
          <h3>Private Touring</h3>
          <a href="#">View Tours</a>
        </div>
      </div>
      
      </div>
  )
}

export default Memories