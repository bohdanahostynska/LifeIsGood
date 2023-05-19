import React, { useState } from "react";
import "../MenuScss.scss";
import UserItem from "./UserItem";
import DeliveryGuy from "./DeliveryGuy";
import MainPage from "./MainPage";
import Articles from "./Arlicles";
import "../styles/MenuProducts.scss";
import { Icon } from "../icons";
import { NavLink, useLocation } from "react-router-dom";
import Loader from "./Loader";

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
    title: "Trendng",
    name: "Trend",
    svgName: "flame",
    link: "",
  },
  {
    id: 4,
    title: "Setting",
    name: "Setting",
    svgName: "setting",
    link: "",
  },
];

export const MenuProducts = () => {
  const [activeItem, setActiveItem] = useState(list[0]);
  const { pathname } = useLocation();

  const click = (name) => {
    setActiveItem(list.find((x) => x.name === name));
  };

  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="features">
            <UserItem />
            <nav className="menu">
              <ul className="menu__list">
                {list.map(({ title, name, svgName, link }) => {
                  return link ? (
                    <NavLink
                      to={link}
                      key={name}
                      className={
                        pathname === link
                          ? "menu-link menu-link-active"
                          : "menu-link"
                      }
                    >
                      <li
                        style={{ listStyle: "none" }}
                        onClick={() => click(name)}
                      >
                        <div className="menu-link-icon">
                          <Icon name={svgName} />
                        </div>
                        <span>{title}</span>
                      </li>
                    </NavLink>
                  ) : (
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
            </nav>
            <DeliveryGuy />
          </div>
          <MainPage />
          <Articles />
        </div>
      </div>
    </>
  );
};
export default MenuProducts;
