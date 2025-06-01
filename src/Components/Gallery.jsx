import React, { useState } from 'react'
import Img1 from '../Images/Bride&Groom/Bride.png'
import Img2 from '../Images/Bride&Groom/Groom.png'

const Gallery = () => {

  const data = [
    {
      couples_img : Img1
    },
    {
      couples_img : Img1
    },
    {
      couples_img : Img1
    },
    {
      couples_img : Img2
    },
    {
      couples_img : Img2
    },
    {
      couples_img : Img2
    },
  


  ]

  const [active ,setActive] = useState(0);
  const handleClick = (index) => {
    setActive(index);
  };

  return (
    <div className="Gallery_Container">
      <div className="Gallery" data-aos="flip-left">
        {data.map((item , index) => {
          return(
            <div className="images" key={index} >
              <div className={ index === active ? "active" : ""} onClick={() => handleClick(index)}>
              <img src={item.couples_img} alt="" />
              </div>

            </div>
          )

        })}
      </div>
    </div>
  )
}

export default Gallery