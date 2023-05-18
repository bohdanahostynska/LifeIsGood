import React from "react";
import Plus from "../assets/menu/all_pic/plus.svg";
import Flame from "../assets/menu/all_pic/fire.svg";
import { createCategoryList } from "../redux/reducers/categoryListSlice";
import { useDispatch } from "react-redux";
import "../styles/AllItems.scss";
import { allFood } from "../data/foodData";
import Filter from "../assets/menu/all_pic/articles/filter.svg";

function AllItems({ currentFilter }) {
  const dispatch = useDispatch();

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

  return (
    <>
      <div className="all_items_content">
        <div className="all_items_header">
          <div className="all_items_top">
            <h3 className="all_items_title">All Items</h3>
            <img className="all_items_toggle" src={Filter} alt="tog" />
          </div>
        </div>
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
                  <img
                    className="all_items_icon"
                    src={Plus}
                    alt="plus"
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
      {/* //{
        image,
        price,
        text,
        title,
        quantity,
        id,
        icon,
      } */}
    </>
  );
}

export default AllItems;
