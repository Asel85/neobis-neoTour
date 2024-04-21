import React, { useEffect, useState } from 'react'
import "./recommended.css";
import axios from "axios";
import RecommendedCard from './RecommendedCard';
const url = "https://phobic-honey-production.up.railway.app/api/trips/recommended";

const Recommended = () => {
  const [recommendedData, setRecommendetData] = useState([]);

  useEffect(()=>{
    const getData = async ()=>{
      try{
        const result = await axios.get(url);
        setRecommendetData(result.data);
        console.log(result.data)
      }catch(error){
        console.log("error")
      }
    }
    getData();
  },[])
  return (
    <div className='recommended'>
     <div className="recommended__title">Reccomended</div> 
     <div className="cards">
      {
        recommendedData.map((res)=>{
          return(
            <RecommendedCard info={res}/>
          )
        })
      }
     </div>
    </div>
  )
}

export default Recommended
