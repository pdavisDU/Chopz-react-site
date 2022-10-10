import React from "react";

function ProductItem({ name, image, description }) {
  return (
    <div className="productItem">
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}

export default ProductItem;
