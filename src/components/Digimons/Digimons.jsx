import React, { useEffect, useState } from 'react'
import DigimonCard from '../DigimonCard/DigimonCard'
import "./digimons.css"

export default function Digimons() {
    
    const [digimon, setDigimon] = useState([])
    const [page, setPage] = useState(0)

    useEffect(() => {
        fetch(`https://digi-api.com/api/v1/digimon?page=${page}`)
            .then((res) => res.json())
            .then(data => {
                setDigimon(data.content)
            })
            .catch(err => console.log(err))
    }, [page])

    return (
        <>
    
            <div className="pagination">
                <button 
                    onClick={() => setPage(prev => Math.max(prev - 1, 0))}
                >
                    Back
                </button>

                <span>Page: {page}</span>

                <button 
                    onClick={() => setPage(prev => prev + 1)}
                >
                    Next
                </button>
            </div>

            <div className='card-container'>
                {
                    digimon.map((val) => (
                        <DigimonCard 
                            key={val.id} 
                            image={val.image} 
                            name={val.name}
                            id={val.id}
                        />
                    ))
                }
            </div>
        </>
    )
}
