import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const {id} = useParams();
  const [detailTrip, setDetailTrip] = useState({});

  useEffect(()=>{
   const getDetailTrip = async (e)=>{

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
    <div>
    <div>{detailTrip.destination}</div>
    </div>
  )
}

export default Details

