import React from "react";
import { AboutList } from "../helpers/AboutList";
import AboutItem from "../components/AboutItem";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <h1 className="aboutTitle">About Us</h1>
      <div className="aboutList">
        {AboutList.map((aboutItem, key) => {
          return (
            <AboutItem
              key={key}
              image={aboutItem.image}
              name={aboutItem.name}
              specialty={aboutItem.specialty}
            />
          );
        })}
      </div>
    </div>
  );
}

export default About;
