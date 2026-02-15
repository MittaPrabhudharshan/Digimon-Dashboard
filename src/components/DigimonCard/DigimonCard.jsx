import React from "react";
import "./digimonCard.css";

export default function DigimonCard({ image, name }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-content">
        <h2>{name}</h2>
      </div>
    </div>
  );
}
