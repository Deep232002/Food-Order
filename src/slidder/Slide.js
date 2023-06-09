
import React from 'react';
import './slide.css';
import image from '../image/img'

export default function Slide() {
  return (
    <div id='home'>
      <section className='home'>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner slidder">

            <div className="carousel-item active">
              <div id="slide-item">

                <div className="write">
                  <p className="green">Our Special Dish</p>
                  <p className="head">Fried Chicken</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate enim voluptate mollitia.</p>
                  <button>Order Now</button>
                </div>

                <div className="img">
                  <img src={image.chicken2} alt="" />
                </div>

              </div>
            </div>

            <div className="carousel-item">
              <div id="slide-item">

                <div className="write">
                  <p className="green">Our Special Dish</p>
                  <p className="head">Hot Pizza</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate enim voluptate mollitia.</p>
                  <button>Order Now</button>
                </div>

                <div className="img">
                  <img src={image.pizza2} alt="" />
                </div>

              </div>
            </div>

            <div className="carousel-item">
              <div id="slide-item">

                <div className="write">
                  <p className="green">Our Special Dish</p>
                  <p className="head">Spicy Noodles</p>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate enim voluptate mollitia.</p>
                  <button>Order Now</button>
                </div>

                <div className="img">
                  <img src={image.noodles} height={300} alt="" />
                </div>

              </div>
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
            <span className="carousel-control-prev-icon left" aria-hidden="true"></span>
            <span className="sr-only" style={{ zIndex: '0' }}>Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
            <span className="carousel-control-next-icon left" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </section>
      
    </div>
  );
}
