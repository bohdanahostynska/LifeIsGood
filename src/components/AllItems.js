import React from "react";
import Plus from "../assets/menu/all_pic/plus.svg";
import Flame from "../assets/menu/all_pic/fire.svg";
import Tick from "..//assets/menu/tick2.svg";
import {
  createCategoryList,
  handleOpenBasket,
} from "../redux/reducers/categoryListSlice";
import { useDispatch, useSelector } from "react-redux";
import { allFood } from "../data/foodData";

const checkKey = (item, list, key) => list.some((el) => el[key] === item[key]);

function AllItems({ currentFilter }) {
  const dispatch = useDispatch();
  const { categoryList } = useSelector((state) => state.categoryList);

  const handleOnClick = (item) => {
    dispatch(createCategoryList(item));
    dispatch(handleOpenBasket(true));
  };

  const data =
    currentFilter.name === "all"
      ? allFood
      : allFood.filter((el) => el.category === currentFilter.name);

  return (
    <div className="all_items_content">
      {data.map((item) => {
        const { title, category, image, text, price, id } = item;
        return (
          <div className="all_items_all" key={category + id}>
            <img className="all_items_img" src={image} alt="all_images" />

            <img className="all_items_image" src={Flame} alt="all_images" />
            <div className="all_items_bottom">
              <h3 className="all_items_title">{title}</h3>
              <p className="all_items_text">{text}</p>
              <div className="all_items_add">
                <p className="all_items_price">{price}</p>
                <div
                  className=" all_items_icon"
                  style={{ background: "black" }}
                  onClick={() =>
                    checkKey(item, categoryList, "id")
                      ? undefined
                      : handleOnClick(item)
                  }
                >
                  {checkKey(item, categoryList, "id") ? (
                    <img className="all_items_tick" src={Tick} alt="tick" />
                  ) : (
                    <img className="all_items_plus" src={Plus} alt="plus" />
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default AllItems;
