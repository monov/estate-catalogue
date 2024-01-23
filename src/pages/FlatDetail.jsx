import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import flats from "../data/db.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FlatDetail.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Contactus from "../components/Contactus.jsx";
import Navbar from "../components/Navbar.jsx";
import Kroshki from "../components/Kroshki.jsx";

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

function formatstuff(text) {
  return text.toLocaleString("en-US").replace(/,/g, ` `);
}

const FlatDetail = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.scrollTo(0, 0);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const apiUrl =
    "https://v6.exchangerate-api.com/v6/b1e819dad6a4c0e74972aa9d/latest/USD";

  const [pricetext, setPricetext] = useState(flat.price)
  const [ratiotext, setRatiotext] = useState(Math.floor(pricetext / flat.area))
  const [currency, setCurrency] = useState("USD")
  async function askconvert(event) {
    if (event.target.value === "uzs") {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setPricetext(formatstuff(Math.round(parseInt(data.conversion_rates["UZS"])) * flat.price))
      let priceuzs = Math.round(parseInt(data.conversion_rates["UZS"])) * flat.price;
      setRatiotext(Math.floor(priceuzs / flat.area))
      setCurrency("UZS")
    } else if (event.target.value === "usd"){
      setPricetext(formatstuff(flat.price))
      setRatiotext(formatstuff(Math.floor(flat.price / flat.area)))
      setCurrency("USD")
    }
  }

  if (!flat) {
    return <p>Flat not found</p>;
  }

  return (
    <>
    <Kroshki />
    <div className="fldt-main-body">
      <Contactus />
      <section>
        <div className="buttons-wrapper">
          <div className="button" onClick={goToSlide}>
            План
          </div>
          <div className="button">Описание</div>
          <div className="button">Записаться на просмотр</div>
        </div>
        <div className="fldt-title-wrapper">
          <div className="fldt-title-main">{flat.name}</div>
          <div className="fldt-title-price">
            {formatstuff(flat.price)} USD -&nbsp;
            <span className="fldt-title-price-span">
              {formatstuff(Math.round(flat.price / flat.area))} USD/m2
            </span>
          </div>
        </div>
        <Slider className="Slider" ref={sliderRef} {...settings}>
          {flat.pics.map((item, index) => (
            <div key={index}>
              <div
                style={{
                  background: `url(${item}.jpg)`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  height: windowWidth < 450 ? "40vh" : "100vh",
                  width: "100%",
                }}
              ></div>
            </div>
          ))}
        </Slider>
      </section>{" "}
      <div className="fldt-title-wrapper-mobile">
        <div className="fldt-title-main-mobile">{flat.name}</div>
        <div className="fldt-title-price-mobile">
          {flat.price} USD -&nbsp;
          <span className="fldt-title-price-span ttpr-mobile">
            {Math.round(flat.price / flat.area)} USD/m2
          </span>
        </div>
      </div>
      <section className="buttons-wrapper-mobile">
        <div className="buttons-first-row">
          <div className="button-mobile" onClick={goToSlide}>
            План
          </div>
          <div className="button-mobile">Описание</div>
        </div>
        <div className="button-mobile second-row">Записаться на просмотр</div>
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
            <p className="fldt-bullet">{`Комнат: ${flat.rooms}`}</p>
          </div>
          <div className="fldt-bullet-wrapper">
            <div className="fldt-icon c"></div>
            <p className="fldt-bullet">{`Этаж: ${flat.level}`}</p>
          </div>
          <div className="fldt-bullet-wrapper">
            <div className="fldt-icon d"></div>
            <p className="fldt-bullet">{`Этажность: ${flat.levels}`}</p>
          </div>
          <div className="fldt-bullet-wrapper">
            <div className="fldt-icon e"></div>
            <p className="fldt-bullet">{`Общая площадь: ${flat.area}m2`}</p>
          </div>
          <div className="fldt-bullet-wrapper">
            <div className="fldt-icon f"></div>
            <p className="fldt-bullet">{`Ремонт: ${flat.remont}`}</p>
          </div>
        </div>
      </section>
      {/* <div className="space"></div> */}
      <section className="fldt-moreinfo-body">
        <div className="fldt-moreinfo price">
          <p className="fldt-moreinfo-p-title">Цена</p>
          <div className="currency-2">
            <div className="cur-txt-2">
              {pricetext} {currency} - <span className="cur-txt-2-span">{ratiotext} {currency}/m2</span>
            </div>
            <select className="drop-2" onChange={askconvert}>
              <option value="usd">USD</option>
              <option value="uzs">UZS</option>
            </select>
          </div>
          {flat.additionalInfo.price.map((item) => {
            return <p>{item}</p>;
          })}
          <p className="fldt-moreinfo-p-title">Расположение</p>
          {flat.additionalInfo.location.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
        <div className="fldt-moreinfo home">
          <p className="fldt-moreinfo-p-title">Дом</p>
          {flat.additionalInfo.home.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
        <div className="fldt-moreinfo apartment">
          <p className="fldt-moreinfo-p-title">Квартира</p>
          <div className="fldt-moreinfo-apartment-wrapper">
            <div className="fldt-moreinfo-apartmen-part1">
              {flat.additionalInfo.apartment.part1.map((item) => {
                return <p>{item}</p>;
              })}
            </div>
            <div className="fldt-moreinfo-apartment-part2">
              {flat.additionalInfo.apartment.part2.map((item) => {
                return <p>{item}</p>;
              })}
            </div>
          </div>
        </div>
      </section>
      {/* <div className="space"></div> */}
      <section className="contact-us">
        <div className="our-agent">
          <div className="pfp"></div>
          <div className="our-agent-text">
            <p className="agent-name-p">Саидислом Ходжаев</p>
            <p>С радостью проконсультирую вас по данной квартире</p>
          </div>
        </div>
        <div className="input-contact-wrapper">
          <input
            type="text"
            placeholder="Ваш номер телефона"
            className="fldt-input"
          />
          <button className="fldt-send-button">Отправить</button>
        </div>
      </section>
      <div className="space"></div>
    </div>
    </>
    
  );
};

export default FlatDetail;
