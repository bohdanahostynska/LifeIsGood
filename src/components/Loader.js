import React from "react";
import apple from "../assets/login/bitten-apple.svg";
import grapes from "../assets/login/grapes.svg";
import cheese from "../assets/menu/all_pic/articles/cheese 1.svg";
import flame from "../assets/menu/all_pic/articles/flame 2.svg";
import burger from "../assets/menu/all_pic/burger (2).svg";
import orange from "../assets/login/orange.svg";
function Loader() {
  return (
    <div className="loader_wrapper">
      <div className="loader_content">
        <div className="loader_images">
          <img className="loader_image1" src={apple} alt="loader" />
          <img className="loader_image3" src={cheese} alt="loader" />
          <img className="loader_image4" src={flame} alt="loader" />
          <img className="loader_image5" src={burger} alt="loader" />
          <img className="loader_image6" src={orange} alt="loader" />
        </div>
        <h2 className="loader_title">Yelp App</h2>
        <p className="loader_text">developed by Bohdana Hostynska</p>
        <img className="loader_image2" src={grapes} alt="loader" />
      </div>
    </div>
  );
}

export default Loader;
