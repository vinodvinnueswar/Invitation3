import React from 'react'
import GoldenArch from '../Images/Gold_Mandal2.png'
import textBox from '../Images/textBox/text_box.png'
import GrmBr from '../Images/Grm_Br/Grm_Br.png'
import BG from '../Images/bg/bg.jpg'
import frame from '../Images/frame/frame.png'
import Rings from '../Images/ring/ring.png'
import Groom_Page from './Groom_Page'

const Intro = () => {
  return (
    <div className="Intro_Container">
        <div className="Gold_Mandal">
           <img src={GoldenArch} alt="" />
        </div>
         
        <div className="title">
            <h2>Wedding Invitation</h2>
        </div>

        <div className="text_box">
          <img src={textBox} alt="" />
        </div>


        <div className="matter">
        <p>Jhon</p>
         <p>&</p>
        <p>Jenni</p> 
        </div>

        <div className="caption">
          <p>We Invite You To Celebrate Our Wedding </p>
        </div>
        
    
       

    </div>
  )
}

export default Intro