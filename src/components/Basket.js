import React from "react";
import Arrow from "../assets/basket/arrow.svg";

function Basket({ image, title, text, price }) {
  return (
    <div className="basket_container">
      <div className="basket_content">
        <div className="basket_header">
          <h2 className="basket_title">Basket</h2>
          <img className="basket_arrow" src={Arrow} alt="arr" />
        </div>
        <div className="basket_body">
          <div className="basket_item">
            <img className="basked_image" src={image} alt="img" />
            <h3 className="basket_title">{title}</h3>
            <p className="basket_text">{text}</p>
            <p className="basket_price">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Basket;
