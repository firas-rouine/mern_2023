import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


const Planets = (props) => {
    const [planets, setPlanets] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then((res) => {
                // console.log(res.data);
                setPlanets(res.data)
            })
            .catch((err) => {
                console.log(err)
                setPlanets({ error: "These are not the droids you are looking for" })
            })
    }, [id])

    return (
        planets.error ? <div><h1>{planets.error}</h1> <img src="https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721" alt="Obi-Wan Kenob image"  height="200"/></div> :
        <div>
            <h1> {planets.name}</h1>
            <p><span style={{fontWeight:'bold'}}>Climate:</span> {planets.climate}</p>
            <p><span style={{fontWeight:'bold'}}>Terrain:</span> {planets.terrain}</p>
            <p><span style={{fontWeight:'bold'}}>Surface Water:</span> {planets.surface_water}</p>
            <p><span style={{fontWeight:'bold'}}>Population:</span> {planets.population}</p>

        </div>
    )
}

export default Planets