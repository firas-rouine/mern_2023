import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";

const Main = (props) => {
    const [products,setProducts]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            // console.log(res.data);
            setProducts(res.data)
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[])
    
  return (
    <div>
        <hr />
        <h1>All products</h1>
        {/* {JSON.stringify(products)} */}
        
        {products.map(oneProduct=>{
                    return(
                <p key={oneProduct._id}><Link to={`/${oneProduct._id}`}>{oneProduct.title}</Link></p>
            )
        })}
        </div>
  )
}

export default Main