import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import "./MenuScss.scss";
import RouterApp from "./RouterApp";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../src/context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <RouterApp />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
