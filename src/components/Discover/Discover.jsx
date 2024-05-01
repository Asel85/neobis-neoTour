import React, { useEffect, useRef, useState } from 'react'
import "./discover.css";
import axios from "axios";
import DiscoverCard from './DiscoverCard';
import Header from '../Header/Header';
import Recommended from '../Recommended/Recommended';

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
  };

  
  const swiperRef = useRef(null);

  useEffect(() => {
     if (swiperRef.current) {
        swiperRef.current.slideTo(0);
     }
  }, []);

  const onSwiper = (swiper) => {
     swiperRef.current = swiper;
  };

  const handlePrevBtn = () => swiperRef.current?.slidePrev();
  const handleNextBtn = () => swiperRef.current?.slideNext();
  
  return (
    <>
    <Header/>
    <div className='discover' id='discover'>
      <div className="discover__title">
        <div className="discover__text">Discover</div>
        <div className="discover__btns">
               <button className='discover__btn' onClick={handlePrevBtn}>
                  <svg>
                     <path d="M0.292892 8.70711C-0.0976315 8.31658 -0.0976315 7.68342 0.292892 7.29289L6.65685 0.928932C7.04738 0.538408 7.68054 0.538408 8.07107 0.928932C8.46159 1.31946 8.46159 1.95262 8.07107 2.34315L2.41421 8L8.07107 13.6569C8.46159 14.0474 8.46159 14.6805 8.07107 15.0711C7.68054 15.4616 7.04738 15.4616 6.65685 15.0711L0.292892 8.70711ZM25 9H1V7H25V9Z" />
                  </svg>
               </button>
               <button className='discover__btn' onClick={handleNextBtn}>
                  <svg>
                     <path d="M24.7071 8.70711C25.0976 8.31658 25.0976 7.68342 24.7071 7.29289L18.3431 0.928932C17.9526 0.538408 17.3195 0.538408 16.9289 0.928932C16.5384 1.31946 16.5384 1.95262 16.9289 2.34315L22.5858 8L16.9289 13.6569C16.5384 14.0474 16.5384 14.6805 16.9289 15.0711C17.3195 15.4616 17.9526 15.4616 18.3431 15.0711L24.7071 8.70711ZM0 9H24V7H0V9Z" />
                  </svg>
               </button>
            </div>
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
              <DiscoverCard  dataTrip={dataTrip} onSwiper={onSwiper} /> 
         //   )
        //  })
        }
      </div>
    </div>
    <Recommended/>
    </>
  )
}

export default Discover
