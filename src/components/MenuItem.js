import { type } from "@testing-library/user-event/dist/type";
import React from "react";

function MenuItem({ name, hair, price, hair2, price2, hair3 }) {
  return (
    <div className="menuItem">
      <h1>{name}</h1>
      <p>{hair}</p>
      <p>${price}</p>
      <p>{hair2}</p>
      <p>{price2}</p>
      <p>{hair3}</p>
    </div>
  );
}

export default MenuItem;
