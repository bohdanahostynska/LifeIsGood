import React, { useState } from "react";
import UserItem from "./UserItem";
import DeliveryGuy from "./DeliveryGuy";
import MainPage from "./MainPage";
import { Icon } from "../icons";
import Header from "./Header";
import Menu from "./Menu";

export const MenuProducts = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="features">
          <Menu />
        </div>
        <MainPage />
      </div>
    </div>
  );
};
export default MenuProducts;
