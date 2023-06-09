import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import item from './reviewitem';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import "swiper/css/pagination";
// import style from './YourComponent.module.css';
import style from './review.module.css'

const YourComponent = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth <= 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div id='Review'>
      <section className={style.reviewcontainer} >
        <p className={style.green}>Customer's review</p>
        <p className={style.head}>WHAT THEY SAY</p>

        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          pagination={{ clickable: true }}
          className={style.mySwiper}
        >
          {item.map((element) => (
            <SwiperSlide className={style.eachslidder} key={element.id}>
              <div className={style.box}>
                <div className={style.review}>
                  <div className={style.reviewpara}>
                    <p className={style.paragraph}>
                      <FaQuoteLeft id={style.leftcomma} />
                      <p>{element.para}</p>
                      <FaQuoteRight id={style.rightcomma} />
                    </p>
                  </div>
                </div>
                <div className={style.clientimage}>
                  {/* <img className={style.image} >{element.image} */}
                  <img src={element.image} className={style.image} height={100} alt="" />
                  <div className={style.name}>
                    <p className={style.dark}>{element.name}</p>
                    <p className={style.profassion}>{element.profassion}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    
    </div>
  );
};

export default YourComponent;
