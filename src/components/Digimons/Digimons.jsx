import React, { useEffect, useState } from 'react'
import DigimonCard from '../DigimonCard/DigimonCard'
import "./digimons.css"
export default function Digimons() {

    let [digimon, setDigimon] = useState(null)
    let [page, setPage] = useState(0)

    function fetchData() {
        fetch(`https://digi-api.com/api/v1/digimon?page=${page}`)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                setDigimon(data.content)
            })
    }


    useEffect(() => {
        console.log("hello")
        fetchData()
    }, [page])


    return (
        <>
            <div>
                <button onClick={() => setPage(--page)}>Back</button>
                <button onClick={() => setPage(++page)}>Next</button>
            </div>
            <div className='card-container'>
                {
                    digimon?.map((val) => {
                        return (
                            <DigimonCard key={val.image} image={val.image} name={val.name}/>
                        )
                    })
                }
            </div>
           
        </>
    )
}
