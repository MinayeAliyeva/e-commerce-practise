import React from "react";
import { NavLink } from "react-router-dom";
const MenuBar = () => {
  return (
    <div
      className="links"
      style={{ display: "flex", columnGap: "20px", width: "30%" }}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/shop">Shop</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
    </div>
  );
};

export default MenuBar;
