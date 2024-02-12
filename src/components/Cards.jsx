import React from "react";
import flats from "../data/db.js";
import "./Cards.css";
import { Link, useLocation } from "react-router-dom";

const Cards = ({ showMore, setShowMore, setPop }) => {
  const location = useLocation();
  const isRouteA = location.pathname === "/allflats";

  const flatsToRender = isRouteA ? flats : flats.slice(0, showMore);
  const handlePopOpen = () => {
    setPop(true);
  };
  return (
    <div className="cards-wrapper">
      {flatsToRender.map((flat) => (
        <div key={flat.id} className="card">
          <div>
            <img
              className="flat-img"
              src={flat.img}
              alt="wrong link"
              height="203px"
              width="400px"
            />
          </div>
          <div>
            <Link to={`/${flat.id}`} className="flat-name">{flat.name}</Link>
            <p className="flat-price">
              {flat.price} USD -{" "}
              <span>{Math.round(flat.price / flat.area)} USD/m2</span>
            </p>
            <p className="flat-p-row">
              {" "}
              <img src="/icons/measurement.png" height="14px" />
              &nbsp;{flat.area}m2, {flat.level}/{flat.levels} &nbsp;&nbsp;&nbsp;
              <img src="/icons/bed.png" height="14px" />
              &nbsp;этаж спален:
              {flat.rooms} &nbsp;&nbsp;&nbsp;
              <img src="/icons/map-marker.png" height="14px" />
              &nbsp;{flat.region}
            </p>
            <p className="flat-desc">{flat.bio.slice(0, 200)}...</p>
            <button onClick={handlePopOpen} className="flat-button">
              ЗАПИСАТЬСЯ НА ПРОСМОТР
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
