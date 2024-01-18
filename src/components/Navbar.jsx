import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-body">
      <div className="navbar-logo"></div>

      <div className="navbar-list">
        <Link className="navbar-list-link" to={"/allflats"}>Все квартиры</Link>
        <a href="#" className="navbar-list-link">По районам</a>
        <a href="#" className="navbar-list-link">Продавцу</a>
        <a href="#" className="navbar-list-link">О нас</a>
        <a href="#" className="navbar-list-link">Контакты</a>
      </div>
    </div>
  );
};

export default Navbar;
