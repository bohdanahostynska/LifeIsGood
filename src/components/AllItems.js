import React from "react";
import Plus from "../assets/menu/all_pic/plus.svg";
import Tick from "../assets/menu/all_pic/tick.svg";
import Flame from "../assets/menu/all_pic/fire.svg";
import { createCategoryList } from "../redux/reducers/categoryListSlice";
import { useDispatch, useSelector } from "react-redux";
import "../styles/AllItems.scss";
import { allFood } from "../data/foodData";
import { toggleSwitch } from "../redux/reducers/categoryListSlice";

function AllItems({ currentFilter }) {
  const dispatch = useDispatch();
  const plusEnabled = require("../assets/menu/all_pic/plus.svg");
  const plusDisabled = require("../assets/menu/all_pic/tick.svg");
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
    <>
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
              <button className="all_items_button" onClick={handleOnClickIcon}>
                <img className="all_items_image" src={Flame} alt="all_images" />
              </button>

              <div className="all_items_bottom">
                <h3 className="all_items_title">{title}</h3>
                <p className="all_items_text">{text}</p>
                <div className="all_items_add">
                  <p className="all_items_price">{price}</p>
                  <p className="all_items_price">{index}</p>
                  <button className=" all_items_icon">
                    <img
                      className={switchValue ? plusDisabled : plusEnabled}
                      alt="plus"
                      value={switchValue}
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
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}

export default AllItems;
