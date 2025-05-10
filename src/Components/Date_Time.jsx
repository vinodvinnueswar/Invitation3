import React from 'react'
import calender from '../Images/Date&Time/calender.png'
import time from '../Images/Date&Time/span_time.png'
import floral from '../Images/floral/floral1.png'
import floral1 from '../Images/floral/floral.png'

const Date_Time = () => {
  return (
    <div className="Date_container">
     <div className="floral_desgin">
     <img src={floral1} alt="" />
     </div>
      <div className="calender">
        <h2>Date :</h2>
        <img src={calender} alt="" />
        <p>24/05/2025</p>
      </div>
      <div className="Time">
        <h2>Time :</h2>
        <img src={time} alt="" /> 
        <p>at 12:00 AM</p>
      </div>
      <div className="Location">
        <h2>Location :</h2>
        <img src="" alt="" />
        <p>Near Aditya venture <br /> 
          col.Chruch , East Godavari.
          </p>
      </div>
     <div className="floral_img">
     <img src={floral} alt="" />
     </div>
    </div>
    


  )
}

export default Date_Time