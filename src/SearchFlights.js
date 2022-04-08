import React from 'react';
import './SearchFlights.css';

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
      </div>
    </div>
  )
}

export default SearchFlights