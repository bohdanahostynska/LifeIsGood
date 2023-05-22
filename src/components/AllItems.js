import React from "react";
import Plus from "../assets/menu/all_pic/plus.svg";
import Flame from "../assets/menu/all_pic/fire.svg";
import { createCategoryList } from "../redux/reducers/categoryListSlice";
import { useDispatch, useSelector } from "react-redux";
import { allFood } from "../data/foodData";
import {
  toggleSwitch,
  toggleBasket,
} from "../redux/reducers/categoryListSlice";

function AllItems({ currentFilter }) {
  const dispatch = useDispatch();
  const switchValue = useSelector((state) => state.active);
  const handleOnClick = (item) => {
    dispatch(createCategoryList(item));
  };
  const handleOnClickIcon = (icon) => {
    dispatch(createCategoryList(icon));
  };
  const data =
    currentFilter.name === "all"
      ? allFood
      : allFood.filter((el) => el.category === currentFilter.name);

  function toggleSwitchHandler() {
    dispatch(toggleSwitch());
  }
  return (
    <div className="all_items_content">
      <div className="all_items_header"></div>
      {data.map(
        ({
          title,
          category,
          image,
          text,
          price,
          icon,
          quantity,
          id,
          index,
        }) => (
          <div className="all_items_all" key={category + id}>
            <img className="all_items_img" src={image} alt="all_images" />
            <button
              className="all_items_button"
              onClick={() => {
                handleOnClickIcon();
                toggleBasket();
              }}
            >
              <img className="all_items_image" src={Flame} alt="all_images" />
            </button>

            <div className="all_items_bottom">
              <h3 className="all_items_title">{title}</h3>
              <p className="all_items_text">{text}</p>
              <div className="all_items_add">
                <p className="all_items_price">{price}</p>
                <p className="all_items_price">{index}</p>
                <img
                  className=" all_items_icon"
                  alt="plus"
                  value={switchValue}
                  src={Plus}
                  onValueChange={toggleSwitchHandler}
                  onClick={() =>
                    handleOnClick({
                      image,
                      price,
                      text,
                      title,
                      quantity,
                      id,
                      icon,
                    })
                  }
                />
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default AllItems;
