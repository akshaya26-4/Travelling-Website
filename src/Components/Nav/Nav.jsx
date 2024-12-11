import React, { useRef } from 'react'
import navCSS from "./../Nav/Nav.module.css"


function Nav() {
    const menu=useRef();

    const MenuHandler=()=>{
        menu.current.classList.toggle(navCSS.activeMenu)
    }

  return (
    <div className={navCSS.nav_wrapper}>
        <div className={navCSS.nav_logo}>
            <a href="#">Travel <span>.</span></a>
        </div>
    <ul ref={menu}>
        <li><a href="#home">Home</a></li>
        <li><a href="#trips">Trips</a></li>
        <li><a href="#searches">Searches</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#populardestinations">Popular Destinations</a></li>

    </ul>
    <div className={navCSS.nav_btns}>
        <div className={navCSS.search_wrapper}>
            <i className='ri-search-line'></i>
            <input type='text' placeholder='Search Places'/>
        </div>
        <div className={navCSS.callBtn}>
            <i className='ri-phone-line'></i>
            <p>+1 1800 45 5678 <small>Call Your Travel Agent</small></p>
        </div>
        <i className='ri-menu-2-line' id={navCSS.bars} onClick={MenuHandler}></i>
    </div>
    </div>
   
  )
}

export default Nav