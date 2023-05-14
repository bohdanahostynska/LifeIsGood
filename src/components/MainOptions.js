import { useState } from "react";
import React from "react";
import "../styles/MainOptions.scss";
import all from "../assets/menu/mainpic/all.svg";
import burger from "../assets/menu/mainpic/burger.svg";
import pizza from "../assets/menu/mainpic/pizza.svg";
import salads from "../assets/menu/mainpic/salads.svg";
import donut from "../assets/menu/mainpic/donut.svg";
import drinks from "../assets/menu/mainpic/drinks.svg";

const list = [
  { id: 1, title: "all", name: "all", icon: all },
  { id: 2, title: "burger", name: "burger", icon: burger },
  { id: 3, title: "pizza", name: "pizza", icon: pizza },
  { id: 4, title: "salads", name: "salads", icon: salads },
  { id: 5, title: "donut", name: "donut", icon: donut },
  { id: 6, title: "drinks", name: "drinks", icon: drinks },
];

const MainOptions = () => {
  const [selected, setSelected] = useState(list[0]);

  const click = (name) => {
    setSelected(list.find((x) => x.name === name));
  };

  return (
    <nav className="main_options">
      <ul className="main_options_list">
        {list.map(({ title, name, icon }) => (
          <li
            key={name}
            className={
              selected.name === name
                ? "main_options_item main_options_item-active"
                : "main_options_item"
            }
            onClick={() => click(name)}
          >
            <div className="main_options_pic">
              <img src={icon} alt="options" />
            </div>
            <p className="options_title">{title}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainOptions;
