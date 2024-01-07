import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-body">
      <div className="navbar-logo"></div>

      <div className="navbar-list">
        <li>Топ квартиры</li>
        <li>Наш блог</li>
        <li>Почему мы?</li>
        <li>Контакты</li>
      </div>
    </div>
  );
};

export default Navbar;
