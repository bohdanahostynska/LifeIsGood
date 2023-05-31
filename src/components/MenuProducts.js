import React from "react";
import { useSelector } from "react-redux";
import MainPage from "./MainPage";
import Loader from "./Loader";
import Menu from "./Menu";

export const MenuProducts = () => {
  const { loading } = useSelector((state) => state.auth);

  return (
    <div>
      {" "}
      {loading && <Loader />}
      <div className="container">
        <div className="wrapper">
          <div className="features">
            <Menu />
          </div>
          <MainPage />
        </div>
      </div>
    </div>
  );
};
export default MenuProducts;
