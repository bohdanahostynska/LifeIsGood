import React from "react";
import Plus from "../assets/menu/all_pic/plus.svg";

import "../styles/AllItems.scss";

import { allFood } from "../data/foodData";

function AllItemsClone({ currentFilter }) {
  const data =
    currentFilter.name === "all"
      ? allFood
      : allFood.filter((el) => el.category === currentFilter.name);

  return (
    <>
      <div className="all_items_content">
        {data.map(({ title, category, image, text, price, icon, id }) => (
          <div className="all_items_all" key={category + id}>
            <img className="all_items_img" src={image} alt="all_images" />
            <div className="all_items_bottom">
              <h3 className="all_items_title">{title}</h3>
              <p className="all_items_text">{text}</p>
              <div className="all_items_add">
                <p className="all_items_price">{price}</p>
                <img className="all_items_icon" src={Plus} alt="plus" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllItemsClone;
