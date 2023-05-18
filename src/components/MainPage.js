import React, { useState } from "react";
import Header from "./Header";
import MainOptions, { categoryList } from "./MainOptions";
import AllItems from "./AllItems";
import "../styles/MainPage.scss";
import Basket from "./Basket";
import { useSelector } from "react-redux";
import OrderMoreBasket from "./OrderMoreBasket";

function MainPage() {
  const [filter, setFilter] = useState(categoryList[0]);
  const { isOpenBasket } = useSelector((state) => state.categoryList);
  const { isOpenOrderMoreBasket } = useSelector((state) => state.categoryList);
  const { isLoaderVisible } = useSelector((state) => state.categoryList);
  console.log(filter);
  return (
    <>
      <div className="main_page">
        <div className="main_list">
          <Header />
          <MainOptions currentFilter={filter} setFilter={setFilter} />
          <AllItems currentFilter={filter} />
          {isOpenBasket && <Basket />}
          {isOpenOrderMoreBasket && <OrderMoreBasket />}
        </div>
      </div>
    </>
  );
}
export default MainPage;
