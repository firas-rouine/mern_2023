import React from 'react'
import axios from "axios"
import {useState, useEffect} from "react"
import { useParams } from 'react-router-dom'
const ShowOne = (props) => {
    const [oneShow, setOneShow] = useState({})
    const {id} = useParams();
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
        .then((serverResponse)=>{
            // console.log(serverResponse);
            setOneShow(serverResponse.data.Product)

        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[id])
  return (
    <div>
            <h3>{oneShow.title}</h3>
            <p>Price: ${oneShow.price}</p>
            <p>Description: {oneShow.description}</p>
    </div>
  )
}

export default ShowOne