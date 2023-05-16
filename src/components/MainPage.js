import React, { useState } from "react";
import Header from "./Header";
import MainOptions, { categoryList } from "./MainOptions";
import AllItems from "./AllItems";
import "../styles/MainPage.scss";

function MainPage() {
  const [filter, setFilter] = useState(categoryList[0]);

  return (
    <>
      <div className="main_page">
        <div className="main_list">
          <Header />
          <MainOptions curentFilter={filter} setFilter={setFilter} />
          <AllItems curentFilter={filter} />
        </div>
      </div>
    </>
  );
}

export default MainPage;
