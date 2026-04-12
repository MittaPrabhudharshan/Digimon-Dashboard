import React, { useEffect, useState } from "react";
import "./digimonsDetails.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function DigimonsDetails() {
  const [digimon, setDigimon] = useState(null);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const {id}= useParams()
 // check if it changes when clicking

  useEffect(() => {
  window.scrollTo(0, 0);
}, [id]);
 useEffect(() => {
   setDigimon(null);
    window.scrollTo(0, 0);
    fetch(`https://digi-api.com/api/v1/digimon/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDigimon(data);
      })
      .catch((err) => console.log(err));
  }, [id]);
 





  if (!digimon) return <h2 className="loading">Loading...</h2>;

  const englishDescription = digimon.descriptions?.find(
    (desc) => desc.language === "en_us"
  );

  return (
    <div className="details-container">


      {/* Basic Info */}
      <div className="details-card">
        <img
          src={digimon.images?.[0]?.href}
          alt={digimon.name}
        />

        <h1>{digimon.name}</h1>

        <div className="info-grid">
          <p><strong>Level:</strong> {digimon.levels?.[0]?.level}</p>
          <p><strong>Type:</strong> {digimon.types?.[0]?.type}</p>
          <p><strong>Attribute:</strong> {digimon.attributes?.[0]?.attribute}</p>
          <p><strong>Release:</strong> {digimon.releaseDate}</p>
        </div>

        <p className="description">
          {englishDescription?.description}
        </p>
      </div>

      {/* Skills */}
      <div className="section">
        <h2>Skills</h2>
        <div className="skill-list">
          {digimon.skills?.map((skill) => (
            <div key={skill.id} className="skill-item">
              <h4>{skill.skill}</h4>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Prior Evolutions */}
      <div className="section">
        <h2>Prior Evolutions</h2>
        <div className="evolution-grid">
          {digimon.priorEvolutions?.map((evo) => (
           <div
        key={evo.id}
        className="evolution-card"
        onClick={() => navigate(`/digimons-details/${evo.id}`)}
        style={{ cursor: "pointer" }}
      >
        <img src={evo.image} alt={evo.digimon} />
        <p>{evo.digimon}</p>
      </div>
          ))}
        </div>
      </div>

      {/* Next Evolutions */}
    




<div className="section">
  <h2>Next Evolutions</h2>
  <div className="evolution-grid">
    {digimon.nextEvolutions?.map((evo) => (
      <div
        key={evo.id}
        className="evolution-card"
        onClick={() => navigate(`/digimons-details/${evo.id}`)}
        style={{ cursor: "pointer" }}
      >
        <img src={evo.image} alt={evo.digimon} />
        <p>{evo.digimon}</p>
      </div>
    ))}
  </div>
    </div>
</div>
  );
}
