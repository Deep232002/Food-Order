import React,{useState} from 'react'
import './navbar.css'
export default function Navbar() {
   const [cls,setcls]=useState('fa-solid fa-bars');
  const[act,setact]=useState('')
  const[searchAct,setsearchAct]=useState('')

  const iconClose=()=>{
    setcls('fa-solid fa-bars')
    setact('');
  }
  const iconsearch=()=>{
     setsearchAct('active')
    iconClose();
  }
   const clsmenu=()=>{
    if(cls==='fa-solid fa-bars'){

        setcls('fa-solid fa-xmark')
        setact('activate')
        
    }else{
        setcls('fa-solid fa-bars')
        setact('')
    }
   }
   const iconheart=()=>{
        iconClose();
    }
   const iconcart=()=>{
        iconClose();
    }
   const close=()=>{
    setsearchAct('');
   }
  return (
    <div>

    <nav className='navbar'>
        <div className='logo'>
        <i className="fa-solid fa-utensils" style={{color:"#319b3d"}}></i>Resto.
        </div>
        <div className={`menu ${act}`}>
            
                <li className='activate mx-1'><a href="/Home" >Home</a></li>
                <li><a href="/Dises">Dishes</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Menu">Menu</a></li>
                <li><a href="/Review">Review</a></li>
                <li><a href="/Order">Order</a></li>
    
        </div>

        <div className="icons">
        <i className={cls} id='bars' onClick={clsmenu}></i>
        <i className="fa-solid fa-magnifying-glass" id='search' onClick={iconsearch}></i>
        <i className="fa-solid fa-heart" onClick={iconheart}></i>
        <i className="fa-solid fa-cart-shopping" onClick={iconcart}></i>
        
        </div>
    </nav>
     
    <form action="" className='form-search' id={`${searchAct}`}>
        <input type="search" placeholder='search here...' name="search" id="search-item" />
        <label htmlFor="search-item" className='fa-solid fa-magnifying-glass'></label>
        <i className="fa-solid fa-xmark" id='close' onClick={close}></i>
       
     </form>
     
     </div>
   
     
  )
}
