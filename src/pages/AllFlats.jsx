import React from "react";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";
import Mobilenav from "../components/Mobilenav";
import Kroshki from "../components/Kroshki";

const AllFlats = () => {
  return (
    <>
      <Navbar />
      <Kroshki />
      <Mobilenav />
      <div className="allflats-body" style={{ marginTop: "0rem" }}>
        <Cards />
        <Contactus />
        <div className="space"></div>
        <Footer />
      </div>
    </>
  );
};

export default AllFlats;
