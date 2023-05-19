import React, { useContext, useState } from "react";
import Arrow from "../assets/basket/arrow.svg";
import "../styles/Basket.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  handleItemBasket,
  handleOpenBasket,
  handleOrderMoreBasket,
} from "../redux/reducers/categoryListSlice";

function Basket() {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { categoryList } = useSelector((state) => state.categoryList);
  const { isOpenBasket } = useSelector((state) => state.categoryList);
  const { isVisibleItem } = useSelector((state) => state.categoryList);
  const { isOpenOrderMoreBasket } = useSelector((state) => state.categoryList);

  const toggleOrderMoreBasket = () => {
    dispatch(handleOrderMoreBasket(!isOpenOrderMoreBasket));
  };
  const toggleBasket = () => {
    dispatch(handleOpenBasket(!isOpenBasket));
  };
  const totalPrice = categoryList.reduce(
    (accumulator, currentValue) => accumulator + +currentValue.price.slice(1),
    0
  );

  const add = () => {
    setQuantity((prev) => prev + 1);
  };

  const removeItem = () => {
    dispatch(handleItemBasket());
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
          {categoryList.map(({ price, text, title, image }, idx) => (
            <div className="basket_item" key={idx} onClick={removeItem}>
              <img className="basket_image" src={image} alt="img" />
              <div className="basket_details">
                <h3 className="basket_title">{title}</h3>
                <p className="basket_text">{text}</p>
              </div>
              <p className="basket_quantity">+{quantity}</p>
              <p className="basket_price">{price}</p>
            </div>
          ))}
        </div>
      </div>
      <button className="basket_button" onClick={toggleOrderMoreBasket}>
        Order - {totalPrice}&
      </button>
    </div>
  );
}
export default Basket;
