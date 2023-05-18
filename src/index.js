import React from "react";
import ReactDOM from "react-dom/client";
import "./";
// import "./MenuScss.scss";
import RouterApp from "./RouterApp";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../src/context/AuthContext";
import * as fb from "firebase/app";
import { firebaseConfig } from "./base";
import { Provider } from "react-redux";

import { store } from "./redux/reducers/store";
import { calculateTotals } from "./redux/reducers/categoryListSlice";

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
