import React from 'react';
import './SearchFlights.css';
import Button from 'react-bootstrap/Button';
import {BsArrowRightShort} from "react-icons/bs";

function SearchFlights() {
  return (
    <div className="SearchFlights_container">
      <h1 className="heading">Cheap flights everywhere, from anywhere</h1>
      <div className="flightsbooking_container">
        <div className="flights_radio_buttons">
          <input type="radio"  className="flights_radio" /> Return
          <input type="radio"  className="flights_radio"/> One way
          <input type="radio" className="flights_radio"/> Multi-city
        </div>
        <div className="flights_input_text_container">
          <div>
            <p>From</p>
            <input type="text" className="flights_textinput" placeholder="   Hyderabad (HYD)"/>
          </div>
          <div>
            <p>To</p>
            <input type="text" className="flights_textinput" placeholder="Country, city or airport"/>
          </div>
          <div>
            <p>Depart</p>
            <input type="text" className="flights_textinput flights_textinput2" placeholder="10/04/2022" />
          </div>
          <div>
            <p>Return</p>
            <input type="text" className="flights_textinput  flights_textinput2" placeholder="17/04/2022"/>
          </div>
          <div>
            <p>Cabin Class & Travellers</p>
            <input type="text" className="flights_textinput" placeholder="1 adult, Economy"/>
          </div>
        </div>
        <div className="tick_boxes_container">
          <div className="tick_boxes_column1">
            <div className="tick_boxes">
                <input type="checkbox" className="flights_tickboxes" placeholder="1 adult, Economy"/>
                <p className="flights_tickboxes_p">Add near by airports</p>
            </div>
            <div className="tick_boxes">
                <input type="checkbox" className="flights_tickboxes" placeholder="1 adult, Economy"/>
                <p className="flights_tickboxes_p">Add near by airports</p>
            </div>
          </div>
          
          <div  className="tick_boxes_column2">
            <div className="tick_boxes">
                <input type="checkbox" className="flights_tickboxes" placeholder="1 adult, Economy"/>
                <p className="flights_tickboxes_p">Add near by airports</p>
              </div>
          </div>
          <div className="flights_Button">
            <Button className="Search_flights_button">Search Flights <BsArrowRightShort className="sidearrow"/> </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchFlights