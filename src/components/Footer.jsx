import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-body">
      <div className="footer-logo"></div>
      <div className="footer-nav">
        <div className="footer-nav-menu">
          <a href="">Все квартиры</a>
          <a href="">По районам</a>
          <a href="">Продавцу</a>
          <a href="">О нас</a>
          <a>Контакты</a>
        </div>
        <p>OOO "VIP UYLAR"</p>
      </div>
    </div>
  );
};

export default Footer;
