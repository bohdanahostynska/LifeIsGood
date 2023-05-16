import React from "react";
import ReactDOM from "react-dom/client";
import "./";
// import "./MenuScss.scss";
import RouterApp from "./RouterApp";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../src/context/AuthContext";
import * as fb from "firebase/app";
import { firebaseConfig } from "./base";

const root = ReactDOM.createRoot(document.getElementById("root"));

fb.initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <RouterApp />
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
