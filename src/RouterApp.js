import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import MenuProducts from "./components/MenuProducts";
import React from "react";
import Auth from "./components/Auth";
import Register from "./components/Register";
import Home from "./components/Home";
import { AuthContext } from "./context/AuthContext";
import Loader from "./components/Loader";

const links = [
  { id: "1", link: "/" },
  { id: "2", link: "register" },
  { id: "3", link: "login" },
  { id: "4", link: "loader" },
  { id: "5", link: "menu" },
];

const RouterApp = () => {
  const { currentUser } = React.useContext(AuthContext);
  return (
    <div className="container">
      <nav className="header_nav">
        <ul className="header-ul">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="nav_item"
              style={{ listStyle: "none", textDecoration: "none" }}
            >
              <NavLink
                className="nav_link"
                style={({ isActive }) => {
                  return {
                    backgroundColor: isActive ? "grey" : "transparent",
                  };
                }}
                to={link}
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Routes>
          <Route
            path="/"
            element={
              // <PrivateRoute>
              <Home />
              // </PrivateRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            // element={currentUser ? <Navigate to="/loader" /> : <Auth />}
            element={currentUser ? <Navigate to="/menu" /> : <Auth />}
          />
          {/* <Route path="/loader" element={<Loader />} /> */}
          <Route path="/menu" element={<MenuProducts />} />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </nav>
    </div>
  );
};

export default RouterApp;
