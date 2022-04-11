import React from 'react';
import './FaqSection.css';
import {IoIosArrowDown} from "react-icons/io";
import {AiFillLike} from "react-icons/ai";
import {FaTicketAlt} from "react-icons/fa";
import {MdNotificationsActive} from "react-icons/md";
import {RiVirusFill} from "react-icons/ri";
import {IoAirplaneSharp} from "react-icons/io5";
import {MdAirplaneTicket} from "react-icons/md";
import {FaLeaf} from "react-icons/fa";
import {RiTicket2Fill} from "react-icons/ri";

function FaqSection() {
  return (
    
    <div className="faq_section_container">
      <h1>Finding cheap flights: frequently asked questions</h1>
      <div className="faqs_section">

        <div className="faq">
          <div className="faq_1">
            <AiFillLike className="fa_icon"/>
            <p>How can I find the best flight deals?</p>
          </div>
          <IoIosArrowDown className="down_arrow"/>
        </div>

        <div className="faq_2">
          <div className="faq_1">
            <FaTicketAlt className="fa_icon"/>
            <p>How can I find the best last miute flight deals?</p>
          </div>
          <IoIosArrowDown className="down_arrow"/>
        </div>

        <div className="faq_2">
          <div className="faq_1">
            <MdNotificationsActive className="fa_icon"/>
            <p>How can I stay updates on cheap flight fares?</p>
          </div>
          <IoIosArrowDown className="down_arrow"/>
        </div>

        <div className="faq_2">
          <div className="faq_1">
           <RiVirusFill className="fa_icon"/>
           <p>Can I still book flights during COVID_19?</p>
          </div>
          <IoIosArrowDown className="down_arrow"/>
        </div>

        <div className="faq_2">
          <div className="faq_1">
            <IoAirplaneSharp className="fa_icon"/>
            <p>What happens after I've booksed my flight?</p>
          </div>
          <IoIosArrowDown className="down_arrow"/>
        </div>

        <div className="faq_2">
          <div className="faq_1">
            <MdAirplaneTicket className="fa_icon"/>
            <p>What happens if my flight is cancelled because of COVID-19?</p>
          </div>
          <IoIosArrowDown className="down_arrow"/>
        </div>

        <div className="faq_2">
          <div className="faq_1">
            <FaLeaf className="fa_icon"/>
            <p>How do I book flights that emit less CO<sub>2</sub>?</p>
          </div>          
          <IoIosArrowDown className="down_arrow"/>
        </div>

        <div className="faq_2">
          <div className="faq_1">
            <RiTicket2Fill className="fa_icon"/>
            <p>Where should I book a fight to right now?</p>
          </div>
          <IoIosArrowDown className="down_arrow"/>
        </div>
      </div>
    </div>
    
  )
}

export default FaqSection