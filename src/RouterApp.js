import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import MenuProducts from "./components/MenuProducts";
import React from "react";
import Auth from "./components/Auth";
import Register from "./components/Register";
import Home from "./components/Home";
import { AuthContext } from "./context/AuthContext";

const links = [
  { id: "1", link: "/", name: "Home" },
  { id: "2", link: "register", name: "Register" },
  { id: "3", link: "login", name: "Auth" },
  { id: "4", link: "menu", name: "MenuProducts" },
];

// const PrivateRoute = ({ children }) => {
//   let { currentUser } = React.useContext(AuthContext);
//   if (currentUser === null) {
//     return <Navigate to="/login" />;
//   }

//   return children;
// };

const RouterApp = () => {
  const { currentUser } = React.useContext(AuthContext);
  return (
    <div className="container">
      <nav className="header-nav">
        <ul className="header-ul">
          {links.map(({ id, link, name }) => (
            <li key={id} className="nav_item">
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
            element={currentUser ? <Navigate to="/" /> : <Auth />}
          />
          {/* <Route path="/login" element={<Auth />} /> */}
          <Route path="/menu" element={<MenuProducts />} />

          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </nav>
    </div>
  );
};

export default RouterApp;
