import React, { useState } from "react";
import "./navbar.css";

import { Link } from "react-scroll";
export default function Navbar() {
  
  const [cls, setcls] = useState("fa-solid fa-bars");
  const [act, setact] = useState("");
  const [searchAct, setsearchAct] = useState("");
  const [linkColor,changeLink]=useState('home') 
  const iconClose = () => {
    setcls("fa-solid fa-bars");
    setact("");
  };
  const iconsearch = () => {
    setsearchAct("active");
    iconClose();
  };
  const clsmenu = () => {
    if (cls === "fa-solid fa-bars") {
      setcls("fa-solid fa-xmark");
      setact("activate");
    } else {
      setcls("fa-solid fa-bars");
      setact("");
    }
  };
  const iconheart = () => {
    iconClose();
  };
  const iconcart = () => {
    iconClose();
  };
  const close = () => {
    setsearchAct("");
  };

  const changeColor=(add)=>{
  // console.log(add)
  changeLink(add);
  const currentLocation = window.location.href;
  console.log(currentLocation);
  }
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <i className="fa-solid fa-utensils" style={{ color: "#319b3d" }}></i>
          Resto.
        </div>
        <div className={`menu ${act}`}>
          <li  className={ ` ${"home"==linkColor ? "activate":''}`}>
            <Link  activeClass="active"
            onClick={()=>changeColor('home')}
              to="home"
             
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Home</Link>
          </li>
          <li className={ ` ${"Dishes"==linkColor ? "activate":''}`}>
            <Link  activeClass="active"
             to="Dishes"
             onClick={()=>changeColor('Dishes')}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500} >Dishes</Link>
          </li>
          <li className={ ` ${"About"==linkColor ? "activate":''}`}>
            <Link activeClass="active"
             to="About"
             onClick={()=>changeColor('About')}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>About</Link>
          </li>
          <li className={ ` ${"Menu"==linkColor ? "activate":''}`}>
            <Link activeClass="active"
             to="Menu"
             onClick={()=>changeColor('Menu')}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Menu</Link>
          </li>
          <li className={ ` ${"Review"==linkColor ? "activate":''}`}>
            <Link activeClass="active"
             to="Review"
             onClick={()=>changeColor('Review')}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Review</Link>
          </li>
          <li className={ ` ${"Order"==linkColor ? "activate":''}`}>
            <Link activeClass="active"
             to="Order"
             onClick={()=>changeColor('Order')}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Order</Link>
          </li>
        </div>

        <div className="icons">
          <i className={cls} id="bars" onClick={clsmenu}></i>
          <i
            className="fa-solid fa-magnifying-glass"
            id="search"
            onClick={iconsearch}
          ></i>
          <i className="fa-solid fa-heart" onClick={iconheart}></i>
          <i className="fa-solid fa-cart-shopping" onClick={iconcart}></i>
        </div>
      </nav>

      <form action="" className="form-search" id={`${searchAct}`}>
        <input
          type="search"
          placeholder="search here..."
          name="search"
          id="search-item"
        />
        <label
          htmlFor="search-item"
          className="fa-solid fa-magnifying-glass"
        ></label>
        <i className="fa-solid fa-xmark" id="close" onClick={close}></i>
      </form>
    </div>
  );
}
