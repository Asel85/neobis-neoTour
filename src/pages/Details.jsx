import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import avatar from "../assets/username.png";
import "./details.css";
import svg from "../assets/Arrow-prev.svg";
import location from "../assets/location.svg";
import ReservModal from '../reservModal/ReservModal';

const Details = () => {
  const {id} = useParams();
  const [detailTrip, setDetailTrip] = useState({});
  const [openModal, setOpenModal] = useState(false);

  useEffect(()=>{
   const getDetailTrip = async ()=>{

    try{
      const result = await axios.get(`https://phobic-honey-production.up.railway.app/api/trips/${id}`);
      setDetailTrip(result.data);
      console.log(result.data)

    }catch(error){
      console.log("error");
    }
   }
   getDetailTrip()
  },[id])
  return (
    <div className="detailTour">
      {detailTrip && detailTrip.images && (
        <img className='detailTour__img' src={detailTrip.images[0]} alt={detailTrip.destination} />
      )}
     <a href="/" className="detailTour__btn">
          <img src={svg} alt="icon"  />
          <span>Go back</span>
        </a>
    <div className="detailTour__body">
    <div className='detailTour__title'>{detailTrip.destination}</div>
    <div className="detailTour__location">
      <img src={location} alt="location" />
    <div>{detailTrip.location}</div>
    </div>
    <div className='detailTour__country'>{detailTrip.country}</div>
    <div className='detailTour__text'>{detailTrip.description}</div>
    <div className="reviews__title">Reviews</div>
    { detailTrip.reviews && 
    detailTrip.reviews.map((el)=>{
      return(
        <div className='reviews' key={el.id}>
        <div className="reviews__content">
          <img src={avatar} alt="" className="reviews__avatar" />
        <p className='reviews__username'>{el.username}</p>
        </div>
        <div className='reviews__comment'>{el.comment}</div>
        <div className='reviews__data'>{el.createdDate}</div>
        </div>
      )
    })
    }
    <button onClick={()=>{setOpenModal(true)}} className='detailTour__button'>Book now</button>
    {
      openModal && (
      <ReservModal openModal={openModal} setOpenModal={setOpenModal}/>
      )
    }
    </div>
     </div>
  )
}

export default Details

