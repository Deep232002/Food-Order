
// import './App.css';
// import About from './component/About';
// import Navbar from './component/Navbar';
// import Footer from './component/footer/Footer';
// import Manu from './component/menu/Manu';
// import Order from './component/order/Order';
// // import Riview from './component/review/Riview';
// import YourComponent from './component/review/YourComponent';
// import Cards from './popularDish/Cards';
// import Slide from './slidder/Slide';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

// function App() {
//   return (
//     <>
//     <Router>
//     <Navbar/>
  
//   <Routes>
//     <Route exact path='/' element={ <Slide/>}/>
//     <Route exact path='/Dishes' element={ <Cards/>}/>
//     <Route exact path='/About' element={ <About/>}/>
//     <Route exact path='/Menu' element={ <Manu/>}/>
//     <Route exact path='/Review' element={ <YourComponent/>}/>
//     <Route exact path='/Order' element={ <Order/>}/>
//      </Routes>

//      <Footer/>

//      </Router>
     
//     </>
//   );
// }

// export default App;

import React from "react";
import "./App.css";

import About from "./component/About";
import Navbar from "./component/Navbar";
import Footer from "./component/footer/Footer";
import Manu from "./component/menu/Manu";
import Order from "./component/order/Order";
import YourComponent from "./component/review/YourComponent";
import Cards from "./popularDish/Cards";
import Slide from "./slidder/Slide";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" Component={Slide} />
          <Route exact path="/Dishes" Component={Cards} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Menu" element={<Manu />} />
          <Route exact path="/Review" element={<YourComponent />} />
          <Route exact path="/Order" element={<Order />} />
        </Routes>

        
        <Footer />
      </Router> */}
      <Navbar/>
      <Slide/>
      <Cards/>
      <About/>
      <Manu/>
      <YourComponent/>
      <Order/>
      <Footer />
    </>
  );
}

export default App;

