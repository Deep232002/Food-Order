import React from 'react'
import { RiEBike2Line } from 'react-icons/ri';
import { BiDollar } from 'react-icons/bi'
import { BsHeadset } from 'react-icons/bs'

import image from '../image/img';

import './about.css'
export default function About() {
  return (
    <div >
      <section id='About' >
        <p className='centerr'>About Us</p>
        <p className="headd">WHY CHOOSE US?</p>
        <div className='mainbox'>
            <div className="one"><img src={image.about}alt="" width={500}/></div>
            <div className="two"><p className="twohead">Best Food In The Country </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam ratione maxime vitae sit nam. Nisi, ut soluta, dolorem pariatur modi molestiae vel veniam consectetur aliquam nulla minima reprehenderit iusto! Earum quos beatae non illum. 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam temporibus aliquam vel dolores quos error repellat voluptatibus nesciunt itaque atque.</p>
            <div className="smallbox">
                <div className="boxone"><RiEBike2Line className='icon'/> Free Delivery</div>
                <div className="boxone"><BiDollar className='icon'/> Easy Payment</div>
                <div className="boxone"><BsHeadset className='icon'/> 24/7 Service</div>
            </div>
            <button className='more'>Learn More</button>
            </div>
        </div>
      </section>
   
    </div>
  )
}
