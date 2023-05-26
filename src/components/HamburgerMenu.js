import React, { useState } from "react";
import MenuProducts from "./MenuProducts";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={handleToggle}
      >
        <MenuProducts />
      </div>
      {isOpen && (
        <ul className="menu">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      )}
    </div>
  );
};

export default HamburgerMenu;
