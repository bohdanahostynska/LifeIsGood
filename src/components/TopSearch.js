import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import "../styles/TopSearch.scss";
import Search from "../assets/menu/topsearch/search1.svg";
import basket from "../assets/menu/topsearch/basket.svg";
import Sign from "../assets/menu/topsearch/basket_sign.svg";
import Basket from "./Basket";
import { categoryList } from "./MainOptions";
function TopSearch() {
  //   const dispatch = useDispatch();
  //   const [filter, setFilter] = useState(categoryList[0]);
  //   const click = (name) => {
  //     const { category, price } = filter;
  //     setFilter(categoryList.find((x) => x.name === name));
  //     const newcategoryList = { category, price, id: Date.now().toString() };
  //     // dispatch(createcategoryList(newcategoryList));
  //   };
  //   return (
  //     <div className="top_nav">
  //       <img className="top_search" src={Search} alt="top" />
  //       <img className="top_basket" src={basket} alt="top" onClick={<Basket />} />
  //       <img className="basket_sign" src={Sign} alt="sign" />
  //     </div>
  //   );
  // }
  // const mapDispatchToProps = (dispatch) => {
  //   return {
  //     createcategoryList: (categoryList) =>
  //       dispatch({ type: "CREATE_CATEGORYLIST", payload: "" }),
  //   };
}
// dispatch({ type: "CREATE_CATEGORYLIST", payload: "" });
export default TopSearch;
