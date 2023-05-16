import React from "react";
import "../styles/Header.scss";
import Drooling from "../assets/menu/drooling-face.svg";
function Header() {
  return (
    <>
      <div className="header">
        <h2 className="header_title">Welcome To Lucknow</h2>
        <img className="drooling-face" src={Drooling} alt="drooling" />
      </div>
    </>
  );
}
export default Header;
