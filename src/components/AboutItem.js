import React from "react";

function AboutItem({ name, image, specialty }) {
  return (
    <div className="aboutItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>{specialty}</p>
    </div>
  );
}

export default AboutItem;
