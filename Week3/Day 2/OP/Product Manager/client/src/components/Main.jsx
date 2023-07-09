import React from 'react'
import axios from 'axios';
import Form from './Form';
import DeleteButton from './DeleteButton';
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

const Main = (props) => {
    const [products, setProducts] = useState([])



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


    // create  product
    const createProduct = (newProduct) => {
        axios.post('http://localhost:8000/api/products', newProduct)
            .then((response) => {
                console.log(response.data);
                // props.addProduct(response.data.Product);
                setProducts([...products, response.data.Product]);
            })
            .catch((err) => {
                console.log("❌❌❌ Something Went Wrong", err);
            })

    }

    // delete function
    // const deleteProduct = (id) => {
    //     axios.delete("http://localhost:8000/api/products/" + id)
    //         .then((res) => {
    //             setProducts(products.filter(product => product._id !== id));

    //         })
    //         .catch((err) => {
    //             console.log("❌❌❌ Something Went Wrong", err)
    //         })
    // }

    // const removeFromDom = id => {
    //     setProducts(products.filter(product => product._id !== id));
    // }

    return (
        <div>
            <h2>Product Manager</h2>
            <Form onSubmitProp={createProduct}
                initialTitle=""
                initialPrice="0"
                initialDescription="" />
            <hr />
            <h1>All products</h1>
            {/* {JSON.stringify(products)} */}

            {products.map(oneProduct => {
                return (
                    <div key={oneProduct._id}>
                        <Link key={oneProduct._id} to={`/${oneProduct._id}`}>{oneProduct.title}</Link>
                        {/* <button className="btn btn-secondary m-3" onClick={() => deleteProduct(oneProduct._id)}>delete</button> */}
                        <DeleteButton id={oneProduct._id} successCallback= {()=>setProducts(products.filter(product => product._id !== oneProduct._id))} />
                    </div>
                )
            })}
        </div>
    )
}

export default Main