import React from "react";
import { useDispatch } from "react-redux";
import {
  clearCategoryList,
  handleOrderMoreBasket,
} from "../redux/reducers/categoryListSlice";
import Stopwatch from "../assets/basket/stopwatch 1.svg";
function OrderMoreBasket() {
  const dispatch = useDispatch();
  const toggleOrderMoreBasket = () => {
    dispatch(clearCategoryList());
    dispatch(handleOrderMoreBasket());
  };

  return (
    <div className="order_basket_container">
      <div className="order_basket_content">
        <div className="order_basket_body">
          <img className="oder_basket_img" src={Stopwatch} alt="basket" />
          <h4 className="order_basket_text">in the process of cooking...</h4>
          <button
            className="order_basket_button"
            onClick={() => {
              toggleOrderMoreBasket();
            }}
          >
            Order more
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderMoreBasket;
