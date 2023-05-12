import React from "react";
import All from "../assets/menu/mainpic/all.svg";
import Burger from "../assets/menu/mainpic/burger.svg";
import Pizza from "../assets/menu/mainpic/pizza.svg";
import Salads from "../assets/menu/mainpic/salads.svg";
import Donut from "../assets/menu/mainpic/donut.svg";
import Drinks from "../assets/menu/mainpic/drinks.svg";

function MainOptions() {
  return (
    <div className="main_options">
      <div className="main_options_item">
        <img className="options_pic" src={All} alt="all" />
        <h4 className="options_title">All</h4>
      </div>
      <div className="main_options_item">
        <img className="options_pic" src={Burger} alt="all" />
        <h4 className="options_title">Burger</h4>
      </div>
      <div className="main_options_item">
        <img className="options_pic" src={Pizza} alt="all" />
        <h4 className="options_title">Pizza</h4>
      </div>
      <div className="main_options_item">
        <img className="options_pic" src={Salads} alt="all" />
        <h4 className="options_title">Salads</h4>
      </div>
      <div className="main_options_item">
        <img className="options_pic" src={Donut} alt="all" />
        <h4 className="options_title">Donut</h4>
      </div>
      <div className="main_options_item">
        <img className="options_pic" src={Drinks} alt="all" />
        <h4 className="options_title">Drinks</h4>
      </div>
    </div>
  );
}

export default MainOptions;
