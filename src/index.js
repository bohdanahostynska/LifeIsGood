import React from "react";
import ReactDOM from "react-dom/client";
import "./";
// import "./MenuScss.scss";
import RouterApp from "./RouterApp";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../src/context/AuthContext";
import { compose, createStore, applyMiddleware } from "redux";
import * as fb from "firebase/app";
import { firebaseConfig } from "./base";
import { Provider } from "react-redux";

import { store } from "../src/components/redux/reducers/store";

const root = ReactDOM.createRoot(document.getElementById("root"));

fb.initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <AuthProvider>
          <RouterApp />
        </AuthProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);
