import React from "react";
import "./discover.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Link } from "react-router-dom";

const DiscoverCard = ({ dataTrip, onSwiper }) => {
   return (
      <Swiper
         onSwiper={onSwiper}
         slidesPerView="auto"
         breakpoints={{
            0: {
               spaceBetween: 12,
            },

            900: {
               spaceBetween: 20,
            },
            1100: {
               spaceBetween: 24,
            },
         }}>
         {dataTrip.map((slide) => {
            return (
               <SwiperSlide className="card">
                  <Link to={`/${slide.id}`}>
                     <img src={slide.imageUrl} alt={slide.destination} className="card__img" />
                     <div className="card__destination">{slide.destination}</div>
                  </Link>
               </SwiperSlide>
            );
         })}
      </Swiper>
   );
};

export default DiscoverCard;
