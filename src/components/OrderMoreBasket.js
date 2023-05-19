import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleOrderMoreBasket } from "../redux/reducers/categoryListSlice";
import Stopwatch from "../assets/basket/stopwatch 1.svg";
function OrderMoreBasket() {
  const { isOpenBasket } = useSelector((state) => state.categoryList);
  const dispatch = useDispatch();
  const toggleOrderMoreBasket = () => {
    dispatch(handleOrderMoreBasket(!isOpenBasket));
  };
  return (
    <div className="order_basket_container">
      <div className="order_basket_content">
        <div className="order_basket_body">
          <img className="oder_basket_img" src={Stopwatch} alt="basket" />
          <h4 className="order_basket_text">in the process of cooking...</h4>
          <button
            className="order_basket_button"
            onClick={toggleOrderMoreBasket}
          >
            Order more
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderMoreBasket;
