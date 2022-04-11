import React from 'react';
import './Flightdeals.css';
import dubai from './images/dubaijpg.jpg';
import Etihad from './images/Etihad.webp';
import london from './images/londonjpg.jpg';
import plane from './images/planei.png';
import {AiFillCheckCircle} from "react-icons/ai";


function Flightsdeal() {
  return (
    <div className="flightsdeals_container">
      <div className="flights_heading">
        <div className="flights_head">
          <h1 className="head">Flight deals from Hyderabad</h1>
          <p className="para">Check out the cheapest flights departing in the next 90 days</p>
        </div>
        <div className="flghts_see_details">
          <a className="see_details" >See more details</a>
        </div>
      </div>
      <div className="flghts_cards_container">
        <div className="flghts_card">
          <img src={dubai} className="city_images"/>
          <h2 className="city_name">Dubai</h2>

          <div className="flghts_info_container">
            <img src={Etihad} className="icon_image"/>
            <div className="info_details">
              <p className="info_date">Thu, 14 Apr</p>
              <p className="info_place">HYD - XNB, Etihad Airways</p>
            </div>
          </div>

          <div className="flghts_info_container">
            <img src={Etihad} className="icon_image"/>
            <div className="info_details">
              <p className="info_date">Thu, 19 Apr</p>
              <p className="info_place">XNB - HYD, Etihad Airways</p>
            </div>
          </div>
          <div className="info_info">
            <div className="info_low">
              <AiFillCheckCircle className="check_icon" /> 
              <p className="info_restrict">  
              &nbsp; Low restrictions
              </p>
            </div>
            <a className="see_details" >From ₹38,350 ></a>
          </div>
        </div>
        <div className="flghts_card">
          <img src={london} className="city_images"/>
          <h2 className="city_name">London</h2>
          <div className="flghts_info_container">
            <img src={plane} className="icon_image"/>
            <div className="info_details">
              <p className="info_date">Thu, 12 Apr</p>
              <p className="info_place">HYD - LGW, Indigo Airways</p>
            </div>
          </div>

          <div className="flghts_info_container">
            <img src={plane} className="icon_image"/>
            <div className="info_details">
              <p className="info_date">Thu, 14 Apr</p>
              <p className="info_place">STN - HYD, Ryanair</p>
            </div>
          </div>
          <div className="info_info">
            <div className="info_low">
              <AiFillCheckCircle className="check_icon" /> 
              <p className="info_restrict">  
              &nbsp; Low restrictions
              </p>
            </div>
            <a className="see_details" >From ₹38,350 ></a>
          </div>
        </div>
        <div className="flghts_card">
          <img src={london} className="city_images"/>
          <h2 className="city_name">London</h2>
          <div className="flghts_info_container">
            <img src={plane} className="icon_image"/>
            <div className="info_details">
              <p className="info_date">Thu, 12 Apr</p>
              <p className="info_place">HYD - LGW, Indigo Airways</p>
            </div>
          </div>

          <div className="flghts_info_container">
            <img src={plane} className="icon_image"/>
            <div className="info_details">
              <p className="info_date">Thu, 14 Apr</p>
              <p className="info_place">STN - HYD, Ryanair</p>
            </div>
          </div>
          <div className="info_info">
            <div className="info_low">
              <AiFillCheckCircle className="check_icon" /> 
              <p className="info_restrict">  
              &nbsp; Low restrictions
              </p>
            </div>
            <a className="see_details" >From ₹38,350 ></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Flightsdeal