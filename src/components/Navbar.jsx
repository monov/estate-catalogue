import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Kroshki from "./Kroshki";

const Navbar = () => {
  return (
    <>
      <div className="navbar-body">
        <a href="/" className="navbar-logo"></a>

        <div className="navbar-list">
          <Link className="navbar-list-link" to={"/allflats"}>
            Все квартиры
          </Link>
          <a href="#" className="navbar-list-link">
            По районам
          </a>
          <a href="#" className="navbar-list-link">
            Продавцу
          </a>
          <a href="#whyus" className="navbar-list-link">
            О нас
          </a>
          <a href="#contacts" className="navbar-list-link">
            Контакты
          </a>
        </div>
      </div>
      <Kroshki />
    </>
  );
};

export default Navbar;
