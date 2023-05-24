import React from "react";
import Drooling from "../assets/menu/drooling-face.svg";
import TopSearch from "./TopSearch";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <h2 className="header_title">Welcome To Lucknow</h2>
        <img className="drooling-face" src={Drooling} alt="drooling" />
      </div>
      <TopSearch />
    </div>
  );
}
export default Header;
