import { Link } from "react-router-dom";
import React from "react";
import MapImage from "../assets/map.png";

import "../styles/Schedule.css";

function Contact() {
  return (
    <div className="home">
      <div className="headerContainer">
        <h1>Schedule</h1>
        <p> Call us: (303)-863-9900</p>
        <h1>Location</h1>
        <p>611 Grant Street</p>
        <p>Denver, CO 80203</p>
      </div>
      <a
        href="https://www.google.com/maps/place/Chopz+Mens+Salon/@39.7261546,-104.9861898,17z/data=!3m1!4b1!4m5!3m4!1s0x876c7ed85f88638b:0x3a22b806e3f35edb!8m2!3d39.7261505!4d-104.984035"
        target="_blank"
      >
        <img src={MapImage} className="map" />
      </a>
    </div>
  );
}

export default Contact;
