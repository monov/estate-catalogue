import React from "react";
import flats from "../data/db.js";
import "./Cards.css";
import { Link, useLocation } from "react-router-dom";

const Cards = ({showMore, setShowMore}) => {
  const location = useLocation();
  const isRouteA = location.pathname === "/allflats";
  
  const flatsToRender = isRouteA ? flats : flats.slice(0, showMore);

  return (
    <div className="cards-wrapper">
      {flatsToRender.map((flat) => (
        <Link to={`/${flat.id}`} key={flat.id} className="card">
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
            <p className="flat-name">{flat.name}</p>
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
            <button className="flat-button">ЗАПИСАТЬСЯ НА ПРОСМОТР</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
