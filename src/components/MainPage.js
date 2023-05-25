import React, { useState } from "react";
import Header from "./Header";
import MainOptions, { categoryList } from "./MainOptions";
import AllItems from "./AllItems";
import Basket from "./Basket";
import { useSelector } from "react-redux";
import OrderMoreBasket from "./OrderMoreBasket";
import Articles from "./Arlicles";

function MainPage() {
  const [filter, setFilter] = useState(categoryList[0]);
  const { isOpenBasket } = useSelector((state) => state.categoryList);
  const { isOpenOrderMoreBasket } = useSelector((state) => state.categoryList);

  return (
    <div className="main_page">
      <Header />
      <div className="main_content">
        <div className="main_list">
          <MainOptions currentFilter={filter} setFilter={setFilter} />
          <div className="main_bottom">
            <AllItems currentFilter={filter} />
            {isOpenBasket && <Basket />}
            {isOpenOrderMoreBasket && <OrderMoreBasket />}
          </div>
        </div>
        <Articles />
      </div>
    </div>
  );
}
export default MainPage;
