import React from "react";
import Delguy from "../assets/menu/delguy.svg";
import Arrow from "../assets/menu/arrow.svg";

function DeliveryGuy() {
  return (
    <div className="guy">
      <img className="guy_item" src={Delguy} alt="guy" />
      <h2 className="guy_title">Faster delivery!</h2>
      <div className="guy_know_more">
        <p className="guy_text">Know More</p>
        <img className="guy_arrow-img" src={Arrow} alt="arrow" />
      </div>
    </div>
  );
}

export default DeliveryGuy;
