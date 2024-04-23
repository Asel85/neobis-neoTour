import React from 'react'
import "./discover.css";
import { Navigation,A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
 import "swiper/css/bundle";
import { Link } from 'react-router-dom';


const DiscoverCard = ({dataTrip}) => {
  return (
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
              <Link to={slide.id}>
              <img src={slide.imageUrl} alt={slide.destination} className='card__img' />
              <div className="card__destination">{slide.destination}</div>
              </Link>
            </SwiperSlide> 
          )
        })
      }
    </Swiper>
    
  )
}

export default DiscoverCard
