import React from 'react'
import Intro from '../Components/Intro'
import Groom_Page from '../Components/Groom_Page'
import Bride_Page from '../Components/Bride_Page'
import Date_Time from '../Components/Date_Time'
import Loaction from '../Components/Loaction'
import Gallery from '../Components/Gallery'
import Contacts from '../Components/Contacts'

const HomePage = () => {
  return (
    <div>
        <Intro/>
        <div className="divde">
        <div className="head">
          Bride & Groom
        </div>
        </div>

        <Bride_Page/>
        <Groom_Page/>

        <div className="divde">
        <div className="head">
          Date and Time
        </div>
        </div>

        <Date_Time/>

        <div className="divde">
        <div className="head">
          Location
        </div>
        </div>

        <Loaction/>

        <div className="divde">
        <div className="head">
          Gallery
        </div>
        </div>

        <Gallery/>

        <Contacts/>



    </div>
  )
}

export default HomePage