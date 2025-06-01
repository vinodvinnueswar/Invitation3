import React from 'react'
import Groom from '../Images/Bride&Groom/Groom.png'
import flower from '../Images/flowers/flower6.png'

const Groom_Page = () => {
  return (
    
    <div className="Groom_Container" data-aos="fade-up">
             <div className="flower">
             <img src={flower} alt="" />
             </div>
         <div className="Groom_img">
          <img src={Groom} alt="" />
         </div>
         <div className="Groom_Content">
          <p className='name'>JHON</p>
          <p className='qual'>
            S/O Jacob  
               &
            Mrs. Mariya,   
             Senior Journalist
    
          </p>
         </div>
    
        </div>
    
     
  )
}

export default Groom_Page