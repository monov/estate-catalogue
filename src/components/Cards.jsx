import React from "react";
import flats from "../data/db.js";
import "./Cards.css";
import { Link } from "react-router-dom";

const Cards = () => {

  const slicedFlats = flats.slice(0, 6);

  return (
    <div className="cards-wrapper">
      {slicedFlats.map((flat) => (
        <Link to={`/flats/${flat.id}`} key={flat.id} className="card">
          <img
            className="flat-img"
            src={flat.img}
            alt="wrong link"
            height="203px"
            width="100%"
          />
          <p className="flat-region"> {flat.region} </p>
          <p className="flat-name">{flat.name}</p>
          <p className="flat-price">
            {flat.price} USD -{" "}
            <span>{Math.round(flat.price / flat.area)} USD/m2</span>
          </p>
          <p className="flat-desc">{flat.description}</p>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
