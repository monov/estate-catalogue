import React from "react";
import { useParams } from "react-router-dom";
import flats from "../data/db.js";

const FlatDetail = () => {
  const { flatId } = useParams();
  const flat = flats.find((flat) => flat.id === parseInt(flatId));

  if (!flat) {
    return <p>Flat not found</p>;
  }

  return (
    <div>
      <h2>{flat.name}</h2>
      <p>{flat.description}</p>
    </div>
  );
};

export default FlatDetail;
