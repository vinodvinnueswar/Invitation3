import React from 'react'
import Intro from '../Components/Intro'
import Groom_Page from '../Components/Groom_Page'
import Bride_Page from '../Components/Bride_Page'
import Date_Time from '../Components/Date_Time'
import Loaction from '../Components/Loaction'
import Gallery from '../Components/Gallery'
import Contacts from '../Components/Contacts'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from "react"


const HomePage = () => {
    useEffect(()=>{
      Aos.init({duration:2000})
    },[])
  
  return (
    <div>
        <Intro/>
        <div className="divde">
        <div className="head">
          <p>Bride & Groom</p>
        </div>
        </div>

        <Bride_Page/>
        <Groom_Page/>

        <div className="divde">
        <div className="head">
          <p>Date and Time</p>
        </div>
        </div>

        <Date_Time/>

        <div className="divde">
        <div className="head">
          <p>Location</p>
        </div>
        </div>

        <Loaction/>

        <div className="divde">
        <div className="head">
          <p>Gallery</p>
        </div>
        </div>

        <Gallery/>

        <Contacts/>



    </div>
  )
}

export default HomePage