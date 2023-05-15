import React from "react";
import "../styles/top.scss";
import Search from "../assets/menu/topsearch/search1.svg";
import Basket from "../assets/menu/topsearch/basket.svg";
import Sign from "../assets/menu/topsearch/basket_sign.svg";
function TopSearch() {
  return (
    <div className="top_nav">
      <img className="top_search" src={Search} alt="top" />
      <img className="top_basket" src={Basket} alt="top" />
      <img className="basket_sign" src={Sign} alt="sign" />
    </div>
  );
}

export default TopSearch;
