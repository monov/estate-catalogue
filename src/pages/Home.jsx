import React, { useState } from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Mobilenav from "../components/Mobilenav";
import Cards from "../components/Cards";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Footer from "../components/Footer";

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    if (activeSlide == 2) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide == 0) {
      setActiveSlide(2);
    } else {
      setActiveSlide(activeSlide - 1);
    }
  };

  const whyus = [
    {
      main: "$200.000.000",
      sub: "Проданных квартир на сумму",
    },
    {
      main: "7 экспертов",
      sub: "Лучшие спецы по недвижимости",
    },
    {
      main: "13 квартир",
      sub: "Продаём в месяц",
    },
    {
      main: "9 дней",
      sub: "На поиск и покупку вашей квартиры",
    },
  ];

  const slider = [
    {
      url: "/slider/pic1.webp",
    },
    {
      url: "/slider/pic2.webp",
    },
    {
      url: "/slider/pic3.webp",
    },
  ];

  return (
    <div>
      <Navbar />
      <Mobilenav />

      <section className="home-cards-body-wrapper">
        <div className="home-cards-body">
          <h1>Поможем продать и купить элитные квартиры в Ташкенте </h1>
          <p>7 специалистов международного уровня в вашем распоряжении</p>
        </div>

        <div className="home-cards">
          <Cards />
        </div>
      </section>

      <section className="home-text-gallery">
        <div className="home-text-gallery-txt">
          <div className="txt-sizer">
            <p className="home-text-gallery-txt-header">Для тех, кто ищет роскошную и просторную квартиру!</p>
            <p className="home-text-gallery-txt-intro">Требования квартире выбранной вами:</p>
            <p className="home-text-gallery-txt-main">
              — использованы высококачественные материалы (жженый кирпич,
              арматура и другие материалы)<br/> — правильное расположение жилого
              комплекса, детская площадка, стадион для футбола, оснащенность
              беседками и скамейками для отдыха;
            </p>
            <p className="home-text-gallery-txt-outro">Мы вам поможем!</p>
          </div>
        </div>
        <div className="home-text-gallery-glr">
          <IoIosArrowBack className="arrow arrow-back" onClick={prevSlide} />
          {slider.map((item, idx) => {
            return (
              <img
                className={
                  activeSlide === idx
                    ? "home-glr-slide"
                    : "home-glr-slide hidden"
                }
                src={item.url}
                alt=":("
                key={idx}
                height="100%"
                width="100%"
              />
            );
          })}
          <IoIosArrowForward
            className="arrow arrow-forward"
            onClick={nextSlide}
          />
        </div>
      </section>

      <section className="home-whyus">
        <h1 className="whyus-text">Почему мы?</h1>
        <p className="whyus-text-p">
          4 причины покупать квартиры вместе c нами
        </p>
        <div className="home-whyus-wrapper">
          {whyus.map((item) => {
            return (
              <div className="home-whyus-item">
                <h2 className="whyus-main">{item.main}</h2>
                <div className="line"></div>
                <p className="whyus-sub">{item.sub}</p>
              </div>
            );
          })}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
