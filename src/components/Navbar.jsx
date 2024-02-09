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

          <div class="navbar-list-link select">
            По районам
            <div class="dropdown-content">
              <a href="#">Яккасарайский</a>
              <a href="#">Мирабадский</a>
              <a href="#">Шайхонтохурский</a>
              <a href="#">Юнусабадский</a>
              <a href="#">Мирзо-Улугбекский</a>
            </div>
          </div>
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
        <a className="nav-phone" href="tel:+998781130887">+998 (78) 113-08-87</a>

      </div>

    </>
  );
};

export default Navbar;
