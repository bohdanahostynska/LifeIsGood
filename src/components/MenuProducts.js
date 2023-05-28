import React from "react";
import MainPage from "./MainPage";
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
