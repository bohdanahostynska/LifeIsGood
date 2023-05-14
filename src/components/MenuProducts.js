import React, { useState } from "react";
import classnames from "classnames";
import "../MenuScss.scss";
import UserItem from "./UserItem";
import DeliveryGuy from "./DeliveryGuy";
import Home from "./Home";
import MainPage from "./MainPage";
import Articles from "./Arlicles";
import "../styles/MenuProducts.scss";

const menuList = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Menu",
  },
  {
    id: 3,
    title: "Trend",
  },
  {
    id: 4,
    title: "Setting",
  },
];

export const MenuProducts = () => {
  const [activeItem, setActiveItem] = useState(menuList[0]);

  const changeActiveItem = (item) => {
    setActiveItem(item);
  };
  return (
    <div className="container">
      <div className="wrapper">
        <div className="features">
          <UserItem />
          <nav className="menu">
            <ul className="menu__list">
              {menuList.map((item) => (
                <li
                  className={classnames("menu__item", {
                    "menu__item--active": activeItem.id === item.id,
                  })}
                  key={item.id}
                  onClick={() => changeActiveItem(item)}
                >
                  <div className="menu__icon"></div>
                  <span className="menu__title">{item.title}</span>
                </li>
              ))}
            </ul>
          </nav>
          <DeliveryGuy />
        </div>
        <MainPage />
        <Articles />
      </div>
    </div>
  );
};
export default MenuProducts;
