import React from 'react'
import "../Discover/discover.css";
import { Link } from 'react-router-dom';


const RecommendedCard = ({info}) => {
  return (
     <div className="card">
     <Link to={`/${info.id}`}>
     <img src={info.imageUrl} alt="" className="card__img" />
     <div className="card__destination">{info.destination}</div>
     </Link>
     </div>
    
     
  )
}

export default RecommendedCard
