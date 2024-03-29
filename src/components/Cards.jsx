import React, { useRef } from "react";
import flats from "../data/db.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import "./Cards.css";

import { Link, useLocation, useParams } from "react-router-dom";

const Cards = ({ showMore, setShowMore, setPop }) => {
  const location = useLocation();
  const isRouteA = location.pathname === "/allflats";

  const flatsToRender = isRouteA ? flats : flats.slice(0, showMore);
  const handlePopOpen = () => {
    setPop(true);
  };

  const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-prev-arrow-c" onClick={onClick}>
      <IoIosArrowBack className="custom-arrow-c-a" />
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-next-arrow-c" onClick={onClick}>
      <IoIosArrowForward className="custom-arrow-c-a" />
    </div>
  );

  const sliderRef = useRef();

  let settings = {
    lazyLoad: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    customPaging: function (i) {
      return (
        <div
          className={`custom-dot-c ${
            i === sliderRef.current?.state.currentSlide ? "active" : ""
          }`}
        ></div>
      );
    },
  };
  // className="flat-img"
  return (
    <div className="cards-wrapper">
      {flatsToRender.map((flat) => (
        <div key={flat.id} className="card">
          <div className="card-h-c">
            <div className="flat-img">
              <Slider {...settings} className="slider-card">
                {flat.pics.map((item, index) => (
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                    key={index}
                  >
                    <div
                      style={{
                        background: `url(${item}.jpg)`,
                        backgroundPosition: "center",
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        height: "100%",
                        width: "100%",
                        imageResolution: "100dpi",
                      }}
                    ></div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div style={{ padding: "10px" }}>
            <Link to={`/${flat.id}`} className="flat-name">
              {flat.name}
            </Link>
            <p className="flat-price">
              {flat.price} USD -{" "}
              <span>{Math.round(flat.price / flat.area)} USD/m2</span>
            </p>
            <p className="flat-p-row">
              <div>
                <img src="/icons/measurement.png" height="14px" />
                &nbsp;&nbsp;{flat.area}m2, {flat.level}/{flat.levels}
              </div>
              <div>
                <img src="/icons/bed.png" height="14px" />
                &nbsp;&nbsp;этаж спален:
                {flat.rooms}
              </div>
              <div>
                <img src="/icons/map-marker.png" height="14px" />
                &nbsp;&nbsp;{flat.region}
              </div>
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
