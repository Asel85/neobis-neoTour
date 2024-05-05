import React, { useState } from 'react'
import "./reservModal.css";
import close from "../assets/close.svg";
import user from "../assets/uil_user.svg";
import PhoneInput from 'react-phone-number-input';
import "react-phone-number-input/style.css";

const ReservModal = ({openModal, setOpenModal}) => {
  const [value, setValue] = useState("");
  const [comment, setComment] = useState("");
  const [counter, setCounter] = useState("1");

  const onClickPlus = (e)=>{
    e.preventDefault();
  setCounter(counter + 1)
  }

  const onClickMinus = (e)=>{
    e.preventDefault();
    counter<5 &&
    setCounter(counter - 1)
    
  }
  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal__title">
          <p>Info</p>
          <img src={close} alt="close" onClick={()=>{setOpenModal(false)}} />
        </div>
        <div className="modal__text">To submit an application for a tour reservation, you need to fill in your information and select the number of people for the reservation</div>
        <form action="" className="modal__form">
        <label className='input__title'>Phone number</label>
        <PhoneInput className='phoneInput'
        defaultCountry="KG"
        required
        international
        countryCallingCodeEditable={false}
        value={value} 
        onChange={value=>setValue(value)}/>
        <label className='input__title'>Commentaries to trip</label>
        <input 
        type="text"
        placeholder='Write your wishes to trip...' 
        className="input__comment"
        value={comment}
        onChange={(e)=>{setComment(e.target.value)}}
         />
      <p className="input__title">Commentaries to trip</p>
      <div className="counter">
      <div className="counter__buttons ">
        <button onClick={onClickMinus}>-</button>
        <p className="buttons__text">{counter}</p>
        <button onClick={onClickPlus}>+</button>
      </div>
      <div className="counter__people">
       <img src={user} alt="user" />
       <p>{counter} People</p>
      </div>
      </div>
      <button className='modal__button'>Submit</button>
      </form>
      </div>
    </div>
  )
}

export default ReservModal
