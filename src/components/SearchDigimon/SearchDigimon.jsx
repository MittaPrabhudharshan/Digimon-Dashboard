
import React, { useEffect, useState } from "react";
import DigimonCard from "../DigimonCard/DigimonCard";

export default function SearchDigimon() {
    const [digimon, setDigimon] = useState(null);
    const [page, setPage] = useState(1);
    const [name, setName] = useState("agumon")
    let [loading, setLoading] = useState(false)

    function getData(){
         fetch(`https://digi-api.com/api/v1/digimon/${name}`)
            .then((res) => res.json())
            .then((data) => {
                setDigimon(data);
                setLoading(!loading)
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
       getData()
    }, []);

    if (!digimon) return <h2 className="loading">Loading...</h2>;

   

    return (
    <div className="search-container">
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter Digimon name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={getData}>Search</button>
      </div>

      {loading && <h2 className="loading">Loading...</h2>}

      { !loading &&  digimon && (
        <div className="result">
          <DigimonCard
            name={digimon?.name}
            image={digimon?.images?.[0]?.href}
            id={digimon?.id}
          />
        </div>
      )}
    </div>
    )
}
