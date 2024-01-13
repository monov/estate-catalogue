import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import flats from "../data/db.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FlatDetail.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-prev-arrow" onClick={onClick}>
    <IoIosArrowBack />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-next-arrow" onClick={onClick}>
    <IoIosArrowForward />
  </div>
);

const FlatDetail = () => {
  const sliderRef = useRef();
  const { flatId } = useParams();
  const flat = flats.find((flat) => flat.id === parseInt(flatId));

  const goToSlide = () => {
    sliderRef.current.slickGoTo(-1);
  };

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
          className={`custom-dot ${
            i === sliderRef.current?.state.currentSlide ? "active" : ""
          }`}
        ></div>
      );
    },
  };

  if (!flat) {
    return <p>Flat not found</p>;
  }

  return (
    <div>
      <section>
        <div className="buttons-wrapper">
          <div className="button" onClick={goToSlide}>План</div>
          <div className="button">Описание</div>
          <div className="button">Записаться на просмотр</div>
        </div>
        <div className="fldt-title-wrapper">
          <div className="fldt-title-main">{flat.name}</div>
          <div className="fldt-title-price">
            {flat.price} USD -&nbsp;
            <span className="fldt-title-price-span">
              {Math.round(flat.price / flat.area)} USD/m2
            </span>
          </div>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {flat.pics.map((item, index) => (
            <div key={index}>
              <div
                style={{
                  background: `url(${item}.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "100vh",
                  width: "100%",
                }}
              ></div>
            </div>
          ))}
        </Slider>
      </section>
      <div className="space"></div>
      <section className="fldt-bio">
        <div className="fldt-bio-text">{flat.bio}</div>
        <div className="fldt-bio-bullets">
          <div className="fldt-bullet-wrapper">
            <div className="fldt-icon a"></div>
            <p className="fldt-bullet">{`Район: ${flat.region}`}</p>
          </div>
          <div className="fldt-bullet-wrapper">
            <div className="fldt-icon b"></div>
            <p className="fldt-bullet">{`Комнат: text`}</p>
          </div>
          <div className="fldt-bullet-wrapper">
            <div className="fldt-icon c"></div>
            <p className="fldt-bullet">{`Этаж: text`}</p>
          </div>
          <div className="fldt-bullet-wrapper">
            <div className="fldt-icon d"></div>
            <p className="fldt-bullet">{`Этажность: text`}</p>
          </div>
          <div className="fldt-bullet-wrapper">
            <div className="fldt-icon e"></div>
            <p className="fldt-bullet">{`Общая площадь: ${flat.area}m2`}</p>
          </div>
          <div className="fldt-bullet-wrapper">
            <div className="fldt-icon f"></div>
            <p className="fldt-bullet">{`Ремонт: text`}</p>
          </div>
        </div>
      </section>
      <div className="space"></div>
      <section className="contact-us">
        <div className="our-agent">
          <div className="pfp"></div>
          <div className="our-agent-text">
            <p className="agent-name-p">Саидислом Ходжаев</p>
            <p>С радостью проконсультирую вас по данной квартире</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FlatDetail;
