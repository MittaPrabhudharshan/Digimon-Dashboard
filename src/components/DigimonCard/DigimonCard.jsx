import React from 'react'
import "./digimoncard.css"

export default function DigimonCard({image, name, id}) {
  return (
     <div className="card" >
        <img src={image} />
        <div className="card-content">
            <h2>{name}</h2>
            <p><strong>ID:</strong> {id}</p>
            <a href="https://digi-api.com/api/v1/digimon/6" target="_blank">
                View API Details
            </a>
        </div>
    </div>
  )
}
