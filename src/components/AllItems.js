import React, { useState, useEffect } from "react";
import Plus from "../assets/menu/all_pic/plus.svg";
import Flame from "../assets/menu/all_pic/fire.svg";
import Tick from "..//assets/menu/all_pic/tick.svg";
import { createCategoryList } from "../redux/reducers/categoryListSlice";
import { useDispatch } from "react-redux";
import { allFood } from "../data/foodData";

function AllItems({ currentFilter }) {
  const dispatch = useDispatch();

  const [activeSpan, setActiveSpan] = useState(false);

  const handleOnClick = (item) => {
    dispatch(createCategoryList(item));
    setActiveSpan(!activeSpan);

    if (!activeSpan) {
      createCategoryList(item);
    }
  };
  const handleOnClickIcon = (item) => {
    dispatch(createCategoryList(item));
  };
  const data =
    currentFilter.name === "all"
      ? allFood
      : allFood.filter((el) => el.category === currentFilter.name);

  useEffect(() => {
    if (!currentFilter.id) {
      setActiveSpan(false);
    }
  }, [currentFilter.id]);

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
              }}
            ></button>
            <img className="all_items_image" src={Flame} alt="all_images" />
            <div className="all_items_bottom">
              <h3 className="all_items_title">{title}</h3>
              <p className="all_items_text">{text}</p>
              <div className="all_items_add">
                <p className="all_items_price">{price}</p>
                <p className="all_items_price">{index}</p>
                <div
                  className=" all_items_icon"
                  style={{ background: "black" }}
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
                >
                  {activeSpan ? (
                    <img className="all_items_tick" src={Tick} alt="tick" />
                  ) : (
                    <img className="all_items_plus" src={Plus} alt="plus" />
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default AllItems;
