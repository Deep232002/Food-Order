import React from 'react'
import item from './menuitem'
import './menu.css'
import {AiFillStar,AiFillHeart} from 'react-icons/ai'
import {BsStarHalf} from 'react-icons/bs'
export default function Manu() {
  return (
    <>
    <div className='backgroundS' id='Menu'>
      <section className='color'>
      <div className="cardbox">
        <p className='green'>Our Menu</p>
        <p className="head">TODAY'S SPECIALITY</p>

        <div className="card-items">

        {item.map((element)=>{
            return(
                <div className="coloum">
               
                <div className="heartattack"><AiFillHeart/></div>
                 <img src={element.image} height={186} width={300} alt="" id='image'/>
                 <div className="stars">
                 <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/><BsStarHalf/>
                 </div>
                 <p className='dish-name'>{element.name}</p>
                 <p className='describe'>{element.describe}</p>
                <div className="prize">
                 <div className='button'>Add ToCard</div>
                  <div className="green p">${element.prize}</div>
                </div>
                </div>
            )
        })}
      </div>
      </div>
      </section>
    </div>
  
    </>
  )
}
