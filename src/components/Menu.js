import React, { useState } from "react";
import { Icon } from "../icons";
import UserItem from "./UserItem";
import DeliveryGuy from "./DeliveryGuy";

const list = [
  {
    id: 1,
    title: "Home",
    name: "Home",
    svgName: "home",
    link: "/home",
  },
  {
    id: 2,
    title: "Menu",
    name: "Menu",
    svgName: "menu",
    link: "/menu",
  },
  {
    id: 3,
    title: "Trending",
    name: "Trend",
    svgName: "flame",
    link: "",
  },
  {
    id: 4,
    title: "Settings",
    name: "Setting",
    svgName: "setting",
    link: "",
  },
];

export const Menu = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(list[0]);
  const click = (name) => {
    setActiveItem(list.find((x) => x.name === name));
  };
  return (
    <>
      <div className="menu_all">
        <nav className={`menu ${!openMobileMenu ? "active" : "burger_change"}`}>
          <UserItem />
          <ul className="menu__list">
            {list.map(({ title, name, svgName }) => {
              return (
                <li
                  key={name}
                  style={{ listStyle: "none" }}
                  className={
                    activeItem.name === name
                      ? "menu-link menu-link-active"
                      : "menu-link"
                  }
                  onClick={() => click(name)}
                >
                  <div className="menu-link-icon">
                    <Icon name={svgName} />
                  </div>
                  <span>{title}</span>
                </li>
              );
            })}
          </ul>
          <DeliveryGuy />
          <button
            checked
            type="checkbox"
            className="burger-btn"
            onClick={() => setOpenMobileMenu((prev) => !prev)}
          >
            {!openMobileMenu ? "" : ""}
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </>
  );
};
export default Menu;
