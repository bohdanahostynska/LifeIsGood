import React from "react";
import "../styles/top.scss";
import Search from "../assets/menu/all_pic/articles/search1.svg";
import Basket from "../assets/menu/all_pic/articles/basket.svg";
function TopSearch() {
  return (
    <div className="top_nav">
      <img className="top_search" src={Search} alt="top" />
      <img className="top_basket" src={Basket} alt="top" />
    </div>
  );
}

export default TopSearch;
