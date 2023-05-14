import React from "react";
import Drooling from "../assets/menu/drooling-face.svg";
import MainOptions from "./MainOptions";
import AllItems from "./AllItems";

function MainPage() {
  return (
    <div className="main_page">
      <div className="main_list">
        <div className="main_header">
          <h2 className="main_title">Welcome To Lucknow</h2>
          <img className="main-drooling-face" src={Drooling} alt="drooling" />
        </div>
        <MainOptions />
        <AllItems />
      </div>
    </div>
  );
}

export default MainPage;
