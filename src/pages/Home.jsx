import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Mobilenav from "../components/Mobilenav";
import Cards from "../components/Cards";

const Home = () => {
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
        <div className="home-text-gallery-txt"></div>
        <div className="home-text-gallery-glr"></div>
      </section>
    </div>
  );
};

export default Home;
