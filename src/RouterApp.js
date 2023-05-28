import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import MenuProducts from "./components/MenuProducts";
import React from "react";
import Auth from "./components/Auth";
import Register from "./components/Register";
import Home from "./components/Home";
import { AuthContext } from "./context/AuthContext";
import Loader from "./components/Loader";
import { loading, setLoading } from "./redux/reducers/authSlice";

const links = [
  { id: "1", link: "register" },
  { id: "2", link: "login" },
  { id: "3", link: "loader" },
  { id: "4", link: "menu" },
  { id: "5", link: "home" },
];
const PrivateRoute = ({ children }) => {
  let { currentUser } = React.useContext(AuthContext);

  if (currentUser === null) {
    return <Navigate to="/login" />;
  }
  return children;
};

const RouterApp = () => {
  const { currentUser } = React.useContext(AuthContext);
  return (
    <div className="container">
      <nav className="header_nav">
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
        <Routes>
          <Route path="/" element={<Register />} />
          <Route
            path="/login"
            element={currentUser ? <Navigate to="/menu" /> : <Auth />}
          />
          <Route
            path="/login"
            element={
              <PrivateRoute>
                <div className="loader_wrapper">
                  {!loading && (
                    <Loader loading={loading} setLoading={setLoading} />
                  )}
                </div>
              </PrivateRoute>
            }
          />
          <Route path="/loader" element={<Loader />} />
          <Route path="/menu" element={<MenuProducts />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/register" />} />
        </Routes>
      </nav>
    </div>
  );
};

export default RouterApp;
