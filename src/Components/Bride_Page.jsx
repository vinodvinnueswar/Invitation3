import React from 'react'
import Bride from '../Images/Bride&Groom/Bride.png'
import flower from '../Images/flowers/flower6.png'

const Bride_Page = () => {
  return (
    <div className="Bride_Container">
         <div className="flower">
         <img src={flower} alt="" />
         </div>
     <div className="Bride_img">
      <img src={Bride} alt="" />
     </div>
     <div className="Bride_Content">
      <p className='name'>JENNI</p>
      <p className='qual'>
        D/O David vilson
           &
        Mrs. Emma ,   
         MA.Pyscologist.

      </p>
     </div>

    </div>

  )
}

export default Bride_Page