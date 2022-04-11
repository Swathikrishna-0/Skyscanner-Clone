import React from 'react';
import Earth from './images/earth22.svg';
import Bag from './images/bag.svg';
import Clock from './images/clock.svg';
import './FlightsCard.css';

function FlightsCard() {
  return (
    <div className="card_container"> 
      <div className="card">
          <h1>Looking for a cheap flight anywhere in the world?</h1>
          <br/>
          <p>It’s easy around here. 100 million travellers use us as their go-to tool, comparing prices across more than 1,200 airlines and travel providers. With so many cheap flights in one place, you can say hello to savings, and goodbye to stress – here’s how.</p>
          <br/>
          <br/>
          <div className="cards_container">
            <div className="card">
              <img src={Earth} className="image"/>
              <h3>Search 'Everywhere',explore anywhere</h3>
              <p>Enter your departure airport and travel dates, then hit ‘Everywhere’. You’ll see flights to every destination in the world, cheapest first.</p>
            </div>
            <div className="card">
              <img src={Bag} className="image_2"/>
              <h3>Pay less, go further with transparent pricing</h3>
              <p>Cheap flights. No hidden fees. No funny business. With us, the price you see when you search is what you’ll pay.</p>
            </div>
            <div className="card">
              <img src={Clock} className="image"/>
              <h3>Book when it's best with Price Alerts</h3>
              <p>Found your flight, but not quite ready to book? Set up Price Alerts and we’ll let you know when your flight price goes up or down.</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default FlightsCard