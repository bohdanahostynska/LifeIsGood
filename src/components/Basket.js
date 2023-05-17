import React from "react";
import Arrow from "../assets/basket/arrow.svg";
import "../styles/Basket.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  handleOpenBasket,
  handleOrderMoreBasket,
} from "../redux/reducers/categoryListSlice";

function Basket() {
  const { categoryList } = useSelector((state) => state.categoryList);
  const dispatch = useDispatch();
  const { isOpenBasket } = useSelector((state) => state.categoryList);
  const { isOpenOrderMoreBasket } = useSelector((state) => state.categoryList);
  const toggleBasket = () => {
    dispatch(handleOpenBasket(!isOpenBasket));
  };
  const toggleOrderMoreBasket = () => {
    dispatch(handleOrderMoreBasket(!isOpenOrderMoreBasket));
  };
  const calculateTotal = () => {
    let total = 0;
    categoryList.map((item) => (total = total + item.quantity * item.price));
    return total;
  };
  return (
    <div className="basket_container">
      <div className="basket_content">
        <div className="basket_header">
          <h2 className="basket_title">Basket</h2>
          <img
            className="basket_arrow"
            onClick={toggleBasket}
            src={Arrow}
            alt="arr"
          />
        </div>
        <div className="basket_body">
          {categoryList.map(({ price, text, title, image, quantity }) => (
            <div className="basket_item">
              <img className="basket_image" src={image} alt="img" />
              <div className="basket_details">
                <h3 className="basket_title">{title}</h3>
                <p className="basket_text">{text}</p>
              </div>
              <p className="basket_quantity">{quantity}</p>
              <p className="basket_price">{price}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="basket_button" onClick={toggleOrderMoreBasket}>
        Order - {calculateTotal()}
      </button>
    </div>
  );
}
export default Basket;
