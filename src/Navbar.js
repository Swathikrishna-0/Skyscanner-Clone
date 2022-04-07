import React from 'react';
import logo from './images/skyscanner_logopng.png';
import './Navbar.css';
import Button from 'react-bootstrap/Button';
import flag from './images/1200px-Flag_of_India.svg.png';
import {CgAirplane} from "react-icons/cg";
import {IoBedSharp} from "react-icons/io5";
import {GiCityCar} from "react-icons/gi";

function Navbar() {
  return (
    <div className="Navbar_container">
      <div className="Navbar_top">
        <div className="Navbar_top_left">
          <img src={logo} className="skyscanner_logo" />
        </div>
        <div className="Navbar_top_right">
          <a className="navbar_help_top" >Help</a>
          <Button className="navbar_button_top">English (UK) <img src={flag} className="flag_in_button"/> India ₹INR</Button>
          <Button className="navbar_button_top navbar_button_top2">Log In</Button>
        </div>
      </div>
      <div className="Navbar_bottom">
        <Button className="navbar_bottom_buttons button_color"><CgAirplane className="navbar_buttons_icons"/>Flights</Button>
        <Button className="navbar_bottom_buttons"><IoBedSharp className="navbar_buttons_icons"/>Hotels</Button>
        <Button className="navbar_bottom_buttons"><GiCityCar className="navbar_buttons_icons"/>Car Hire</Button>
      </div>
    </div>
  )
}

export default Navbar