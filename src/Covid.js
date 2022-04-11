import React from 'react';
import './Covid.css';
import Button from 'react-bootstrap/Button';
import map from './images/Generic-COVID-Map-Graphic.png';

function Covid() {
  return (
    <div className="Covid_container"> 
      <div className="covid_content">
        <h1>Find Where to fly during COVID-19</h1>
        <p className="paragraph">Need to know where you can catch that flight to? Get the latest quarantine info, navigate entry restrictions and quarantine requirements, and sign up to get updates when they change.
        </p>
        <div className="buttons_container">
          <Button className="map_button">View live map →</Button>
          &nbsp; &nbsp;
          <a className="anchor">Get travel updates</a>
        </div>
      </div>
      <img src={map} className="map"/>
    </div>
  )
}

export default Covid