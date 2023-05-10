import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import "./MenuScss.scss";
import RouterApp from "./RouterApp";
import { BrowserRouter as Router } from "react-router-dom";
import { DataContext } from "../src/context/CardsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <DataContext>
        <RouterApp />
      </DataContext>
    </Router>
  </React.StrictMode>
);
