import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
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
