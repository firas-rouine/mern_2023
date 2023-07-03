import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router-dom';

const People = (props) => {
    const [people, setPeople] = useState([])
    const { id } = useParams();
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then((res) => {
                // console.log(res.data);
                setPeople(res.data)
            })
            .catch(err => {
                console.error(err);
                setPeople({ error: "These are not the droids you are looking for" })
            });
    }, [id])

    return (
        people.error ?
        <div><h1>{people.error}</h1> <img src="https://lumiere-a.akamaihd.net/v1/images/obi-wan-kenobi-main_3286c63c.jpeg?region=0%2C0%2C1280%2C721" alt="Obi-Wan Kenob image"  height="200"/></div> :
            <div>
                <h1> {people.name}</h1>
                <p><span style={{ fontWeight: 'bold' }}>Heigth:</span> {people.height}</p>
                <p><span style={{ fontWeight: 'bold' }}>Mass:</span> {people.mass}</p>
                <p><span style={{ fontWeight: 'bold' }}>Hair Color:</span> {people.hair_color}</p>
                <p><span style={{ fontWeight: 'bold' }}>Skin Color:</span> {people.skin_color}</p>

            </div>
    )
}

export default People