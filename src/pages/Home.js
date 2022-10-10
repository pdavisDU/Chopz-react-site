import { Link } from "react-router-dom";
import React from "react";
import BannerImage from "../assets/barber.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Chopz Men's Salon</h1>
        <p> The best haricut ever</p>
        <Link to="/schedule">
          <button> Schedule </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
