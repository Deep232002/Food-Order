import React from 'react'
import style from './footer.module.css'
export default function Footer() {
  return (
    <div className={style.mainContainer} >
      <div className={style.container}>
        <div className={style.box}>
            <p className={style.heading}>Location</p>
            <p>India</p>
            <p>Japan</p>
            <p>Aerica</p>
            <p>China</p>
            <p>Russia</p>
        </div>
        <div className={style.box}>
        <p className={style.heading}>Quick Links</p>
            <p>Home</p>
            <p>Dishes</p>
            <p>About</p>
            <p>Menu</p>
            <p>Review</p>
            <p>Order</p>
        </div>
        <div className={style.box}>
        <p className={style.heading}>Contact Info</p>
            <p>+122-28273728</p>
            <p>+122-28273728</p>
            <p>+122-28273728</p>
            <p>deepak@gmail.com</p>
            <p>mohit@gmail.com</p>
            <p>akash@hmail.com</p>
        </div>
        <div className={style.box}>
        <p className={style.heading}>Follow Us</p>
            <p>Insta</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Linkedin</p>
        </div>


      </div>
      <p className={style.copyright}>Copyright &copy; 2023 By <span> Mr. Deepak </span></p>
    </div>
  )
}
