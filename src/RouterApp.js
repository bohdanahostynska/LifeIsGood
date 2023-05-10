import { Routes, Route, NavLink } from "react-router-dom";
import MenuProducts from "./components/MenuProducts";
import React from "react";
// import FormPage from "./pages/FormPage";

const links = [
  { id: "1", link: "/", name: "MenuProducts" },
  // { id: "2", link: "your_cards", name: "YourCards" },
];

const RouterApp = () => {
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
          <Route path="/" element={<MenuProducts />} />
          {/* <Route path="your_cards" element={<YourCards />} /> */}
        </Routes>
      </nav>
    </div>
  );
};

export default RouterApp;
