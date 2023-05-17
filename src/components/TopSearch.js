import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../styles/TopSearch.scss";
import Search from "../assets/menu/topsearch/search1.svg";
import basket from "../assets/menu/topsearch/basket.svg";
import Sign from "../assets/menu/topsearch/basket_sign.svg";
import Basket from "./Basket";
import { handleOpenBasket } from "./redux/reducers/categoryListSlice";

function TopSearch() {
  const dispatch = useDispatch();
  const { isOpenBasket } = useSelector((state) => state.categoryList);

  const toggleBasket = () => {
    dispatch(handleOpenBasket(!isOpenBasket));
  };

  return (
    <div className="top_nav" onClick={toggleBasket}>
      <img className="top_search" src={Search} alt="top" />
      <div className="basket_wrap">
        <img className="top_basket" src={basket} alt="top" />
        <img className="basket_sign" src={Sign} alt="sign" />
      </div>
    </div>
  );
}
export default TopSearch;
