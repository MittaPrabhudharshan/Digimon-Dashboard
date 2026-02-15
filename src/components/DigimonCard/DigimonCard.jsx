import React from "react";
import "./digimonCard.css";
import { useNavigate } from "react-router";

export default function DigimonCard({ image, name ,id }) {
  const navigate = useNavigate()
  return (
    <div className="card" onClick={()=> navigate(`/digimons-details/${id}`)}>
      <img src={image} alt={name} />
      <div className="card-content">
        <h2>{name}</h2>
      </div>

    </div>
  );
}
