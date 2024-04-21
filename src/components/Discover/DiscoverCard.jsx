import React from 'react'
import "./discover.css";
import { Navigation,A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
 import "swiper/css/bundle";


const DiscoverCard = ({dataTrip}) => {
  return (
      //<div className="card">
       // <img src={info.imageUrl} alt="" className="card__img" />
       // <div className="card__destination">{info.destination}</div>
     // </div>
     <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        dataTrip.map((slide)=>{
          return(
            <SwiperSlide className='card'>
              <img src={slide.imageUrl} alt={slide.destination} className='card__img' />
              <div className="card__destination">{slide.destination}</div>
            </SwiperSlide> 
          )
        })
      }
    </Swiper>
    
  )
}

export default DiscoverCard
