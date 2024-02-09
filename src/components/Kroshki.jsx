import React, { useEffect, useState } from "react";
import "./Kroshki.css";
import { Link, useLocation } from "react-router-dom";

const Kroshki = () => {
  const [isKroshki, setKroshki] = useState();
  const location = useLocation();
  useEffect(() => {
    setKroshki(location.pathname.match(/^\/\d+/));
  }, [location.pathname]);
  const path = location.pathname.split("/").filter((i) => i !== "");
  let burl = path[0];
  let zameni = {
    "allflats" : "Все квартиры",
  }
  for (let i = 1; i <= 20; i++) {
    zameni[i.toString()] = "Квартира";
}

  return (
    <div className={isKroshki ? "kroshki-body kroshki" : "kroshki-body"}>
      <Link className="kroshki-link" to={"/"}>Главная&#32;</Link>
      {path.map((item, index) => {
        burl = path.slice(0, index + 1).join('/');
        return <Link className="kroshki-link" to={`/${burl}`}>&#32;&#62;&#32;{zameni[item]}</Link>;
      })}
    </div>
  );
};

export default Kroshki;
