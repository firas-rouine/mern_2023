import React from 'react'
import axios from 'axios';
import  Form  from './Form';
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const Main = (props) => {
    const [products, setProducts] = useState([])


    const addProduct = (newProduct) => {
        setProducts([...products, newProduct]);

        
      };
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then((res) => {
                // console.log(res.data);
                setProducts(res.data)
                
            })
            .catch((err) => {
                console.log("❌❌❌ Something Went Wrong", err);
            })
    }, [])

    // delete function
    const deleteProduct = (id) => {
        axios.delete("http://localhost:8000/api/products/" + id)
            .then((res) => {
                setProducts(products.filter(product => product._id !== id));
          
            })
            .catch((err) => {
                console.log("❌❌❌ Something Went Wrong", err)
            })
    }

    

    return (
        <div>
            <Form addProduct={addProduct}/>
            <hr />
            <h1>All products</h1>
            {/* {JSON.stringify(products)} */}

            {products.map(oneProduct => {
                return (
                    <div  key={oneProduct._id}>
                        <Link key={oneProduct._id} to={`/${oneProduct._id}`}>{oneProduct.title}</Link>
                        <button className="btn btn-secondary m-3" onClick={() => deleteProduct(oneProduct._id)}>delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Main