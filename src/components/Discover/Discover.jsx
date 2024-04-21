import React, { useEffect, useState } from 'react'
import "./discover.css";
import axios from "axios";
import DiscoverCard from './DiscoverCard';

const base_url = "https://phobic-honey-production.up.railway.app/api/trips";
let url = base_url + "/popular";
const arr = ["Popular", "Featured", "Most Visited","Europe","Asia"];

const Discover = () => {

  const [dataTrip,setDataTrip] = useState([]);
  const [url_set, setUrl] = useState(url);
  
  useEffect(()=>{
    const getTrip = async ()=>{
      try{
        const result = await axios.get(url_set);
        setDataTrip(result.data);

      }catch(error){
        console.log("error");
      }
    }
    getTrip()
},[url_set])

  const getData = (value)=>{
    if(value==="Popular"){
      url = base_url + "/popular";
    }
    if(value === "Featured"){
      url = base_url + "/featured";
    }
    if(value === "Most Visited"){
      url = base_url + "/most-visited";
    }
    if(value === "Europe"){
      url = base_url + "/europe";
    }
    if(value === "Asia"){
      url = base_url + "/asia";
    }
    setUrl(url);
  }
  
  return (
    <div className='discover' id='discover'>
      <div className="discover__title">
        <div className="discover__text">Discover</div>
      </div>
      <ul className="discover__items">
        {
          arr.map((value, index)=>{
            return(
              <li className="discover__item"><a href="#" key={index} name={value} onClick={(e)=>{e.preventDefault()
                getData(e.target.name)}} className="discover__link">{value}</a></li>
            )
          })
        }
      </ul>
      <div div className="cards">
        {
         // dataTrip.map((res)=>{
          //  return(
              <DiscoverCard  dataTrip={dataTrip}/> 
         //   )
        //  })
        }
      </div>
    </div>
  )
}

export default Discover
