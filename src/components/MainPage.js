import React from "react";
import Header from "./Header";
import MainOptions from "./MainOptions";
import AllItems from "./AllItems";
import "../styles/MainPage.scss";

function MainPage() {
  return (
    <>
      <div className="main_page">
        <div className="main_list">
          <Header />
          <MainOptions />
          <AllItems />
        </div>
      </div>
    </>
  );
}

export default MainPage;
