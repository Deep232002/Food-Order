import React from 'react'
import style from './order.module.css'
export default function Order() {
  return (
    <>
    <section id='Order'>
    <div className={style.orderContainer}>
      <p className={style.green}>Order Now</p>
      <p className={style.heading}>FREE AND FAST</p>
        <div className={style.mainbox}>
      <div className={style.container}>
        <div className={style.box1}>
            <form action="submit">
                <label htmlFor="name">Your Name</label><br />
                <input type="text" id={style.name} placeholder='name' /><br />
                <label htmlFor="order">Your Order</label>
                <input type="text" name="userorder" id={style.order} placeholder='your order'/>
                 <label htmlFor="">How Much</label>
                 <input type="text" id={style.howmuch} name='quantity' placeholder='how Much Order' />
                 <label htmlFor="">Your Address</label><br />
                 <textarea  id={style.userAddress} name='address' placeholder='enter your address' rows={7} />
                 </form>
        </div>
        <div className={style.box2}>
            <form action="">
                <label htmlFor="number">Your Number</label>
                <input type='number' id={style.number} placeholder='your number' />
                <label htmlFor="otherfood">Additional Food</label>
                <input type="text" name="food" id={style.otherfood} placeholder='enter with food'/>
                 <label htmlFor="">Date And time</label>
                 <input type='datetime-local' id={style.howmuch} name='quantity' placeholder='' />
                 <label htmlFor="usermessage">Your Message</label><br />
                 <textarea rows={7} id={style.usermessage} name='message' placeholder='enter your message'  />
                
                 
            </form>
        </div>
      </div>
            <button>Submit</button>
            </div>
    </div>
    </section>
    </>
  )
}
