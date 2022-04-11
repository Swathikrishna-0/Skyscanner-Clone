import React from 'react'
import './BriefDescrip.css';
import image_earth from './images/earth1.svg';
import image_ticket from './images/ticket1.svg';
import image_list from './images/list2.svg';

function BriefDescrip() {
  return (
    <div className="BriefDescrip_container">
      <div className="BriefDescrip_boxes">
        <img src={image_earth} className="image"/>
        <p className="BriefDescrip_para">Find the best fare by comparing flights from over 1000 providers, then book with no fees</p>
      </div>
      <div className="BriefDescrip_boxes" >
        <img src={image_ticket} className="image"/>
        <p className="BriefDescrip_para">Compare flights from over 1000 providers, then book the cheapest, fastest or greenest flight with no fees.</p>
      </div>
      <div className="BriefDescrip_boxes" >
        <img src={image_list} className="image"/>
        <p className="BriefDescrip_para">Travel with confidence - see the COVID-19 safety measures airlines have in place to keep you safe</p>
      </div>
    </div>
  )
}

export default BriefDescrip