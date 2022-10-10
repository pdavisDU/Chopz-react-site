import React from "react";
import { MenuList } from "../helpers/ServiceList";
import MenuItem from "../components/MenuItem";
function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Services</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              name={menuItem.name}
              hair={menuItem.hair}
              price={menuItem.price}
              hair2={menuItem.hair2}
              price2={menuItem.price2}
              hair3={menuItem.hair3}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
