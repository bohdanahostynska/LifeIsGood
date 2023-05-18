import React from "react";
import "../styles/MainOptions.scss";
import all from "../assets/menu/mainpic/all.svg";
import burger from "../assets/menu/mainpic/burger.svg";
import pizza from "../assets/menu/mainpic/pizza.svg";
import salads from "../assets/menu/mainpic/salads.svg";
import donut from "../assets/menu/mainpic/donut.svg";
import drinks from "../assets/menu/mainpic/drinks.svg";

export const categoryList = [
  { id: 1, title: "all", name: "all", icon: all },
  { id: 2, title: "burger", name: "burger", icon: burger },
  { id: 3, title: "pizza", name: "pizza", icon: pizza },
  { id: 4, title: "salads", name: "salad", icon: salads },
  { id: 5, title: "donut", name: "donut", icon: donut },
  { id: 6, title: "drinks", name: "drink", icon: drinks },
];

const MainOptions = ({ currentFilter, setFilter }) => {
  const click = (name) => {
    setFilter(categoryList.find((x) => x.name === name));
  };

  return (
    <nav className="main_options">
      <ul className="main_options_list">
        {categoryList.map(({ title, name, icon, index }) => (
          <li
            key={name}
            className={
              currentFilter.name === name
                ? "main_options_item main_options_item-active"
                : "main_options_item"
            }
            onClick={() => click(name)}
          >
            <div className="main_options_pic">
              <img src={icon} alt="options" />
            </div>
            <p className="options_title">{title}</p>
            <p className="options_title">{index}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainOptions;
