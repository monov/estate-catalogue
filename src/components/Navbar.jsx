import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-body">
      <div className="navbar-logo"></div>

      <div className="navbar-list">
        <li>Все квартиры</li>
        <li>По районам</li>
        <li>Продавцу</li>
        <li>О нас</li>
        <li>Контакты</li>
      </div>
    </div>
  );
};

export default Navbar;
