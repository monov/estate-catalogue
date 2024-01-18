import React, { useState } from "react";
import "./Mobilenav.css";
import { Link } from "react-router-dom";

const Mobilenav = () => {
  const [isHamOpen, setIsHamOpen] = useState(false);

  function hamClickHandle() {
    setIsHamOpen((v) => !v);
  }

  return (
    <div className="mobilenav">
      <div className="mobilenav-body">
        <div className="mobilenav-logo"></div>
        <div
          className={isHamOpen ? "mobilenav-ham open" : "mobilenav-ham"}
          onClick={hamClickHandle}
        >
          <div className={isHamOpen ? "ham-line a open" : "ham-line a"}></div>
          <div className={isHamOpen ? "ham-line b open" : "ham-line b"}></div>
          <div className={isHamOpen ? "ham-line c open" : "ham-line c"}></div>
        </div>
      </div>
      <div className={isHamOpen ? "mobilenav-menu open" : "mobilenav-menu"}>
        <Link className="link-mobile" to={"/allflats"}>Все квартиры</Link>
        <a className="link-mobile" href="#">По районам</a>
        <a className="link-mobile" href="#">Продавцу</a>
        <a className="link-mobile" href="#">О нас</a>
        <a className="link-mobile" href="#">Контакты</a>
      </div>
    </div>
  );
};

export default Mobilenav;
