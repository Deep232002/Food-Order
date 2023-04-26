import React, { useState } from 'react'
import Items from '../allcardsItem/Items'
import './cards.css'
import {AiFillStar,AiOutlineEye,AiOutlineHeart} from 'react-icons/ai'
import {FaStarHalf} from 'react-icons/fa'
export default function Cards() {
  const [item,setitem]=useState(Items)
  return (
    <div>
      <div className="card">
        <p className='green'>Our Dishes</p>
        <p className="head">POPULAR DISHES</p>

        <div className="card-items">
       
       {
        item.map((element)=>{
          return(
                  <div className="coloum">
                <div className="eye"><AiOutlineEye/></div>
                <div className="heart"><AiOutlineHeart/></div>
                 <img src={element.images} height={150} alt="" />
                 <p>{element.name}</p>
                 <div className="star">
                 <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/><FaStarHalf/>
                 </div>
                <div className="prise">
                  <div className="green p">${element.prise}</div>
                 <button>Add ToCard</button>
                </div>
                </div>
          )
        })
       }
                

               

               
            
        </div>
      </div>
    </div>
  )
}
