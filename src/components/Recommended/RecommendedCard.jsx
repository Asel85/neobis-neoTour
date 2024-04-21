import React from 'react'
import "../Discover/discover.css";


const RecommendedCard = ({info}) => {
  return (
     <div className="card">
     <img src={info.imageUrl} alt="" className="card__img" />
     <div className="card__destination">{info.destination}</div>
     </div>
  )
}

export default RecommendedCard
