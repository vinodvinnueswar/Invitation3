import React from 'react'
import calender from '../Images/Date&Time/calender.png'
import time from '../Images/Date&Time/span_time.png'
import floral from '../Images/floral/floral1.png'
import floral1 from '../Images/floral/floral.png'

const Date_Time = () => {
  return (
    <div className="Date_container">
     <div className="floral_desgin" data-aos="fade-up"
     data-aos-duration="3000">
     <img src={floral1} alt="" />
     </div>
      <div className="calender" data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500">
        <h2>Date :</h2>
        <img src={calender} alt="" />
        <p>24/05/2025</p>
      </div>
      <div className="Time"data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
        <h2>Time :</h2>
        <img src={time} alt="" /> 
        <p>at 12:00 AM</p>
      </div>
      <div className="Location" data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
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