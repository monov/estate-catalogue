import React from "react";
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
  const { flatId } = useParams();
  const flat = flats.find((flat) => flat.id === parseInt(flatId));

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  if (!flat) {
    return <p>Flat not found</p>;
  }

  return (
    <div>
      <section>
        <div className="buttons-wrapper">
          <div className="button">План</div>
          <div className="button">Описание</div>
          <div className="button">Записаться на просмотр</div>
        </div>
        <div className="fldt-title-wrapper">
          <div className="fldt-title-main">{flat.name}</div>
          <div className="fldt-title-price">
            {flat.price} USD -&nbsp;
            <span className="fldt-title-price-span">{Math.round(flat.price / flat.area)} USD/m2</span>
          </div>
        </div>
        <Slider {...settings}>
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

      <h2>{flat.name}</h2>
      <p>{flat.description}</p>
    </div>
  );
};

export default FlatDetail;
