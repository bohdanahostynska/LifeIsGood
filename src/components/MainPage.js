import React, { useState } from "react";
import Header from "./Header";
import MainOptions, { categoryList } from "./MainOptions";
import AllItems from "./AllItems";
import "../styles/MainPage.scss";

function MainPage() {
  const [filter, setFilter] = useState(categoryList[0]);
  console.log(categoryList);
  return (
    <>
      <div className="main_page">
        <div className="main_list">
          <Header />
          <MainOptions currentFilter={filter} setFilter={setFilter} />
          <AllItems currentFilter={filter} />
        </div>
      </div>
    </>
  );
}
export default MainPage;
