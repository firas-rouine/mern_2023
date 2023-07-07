import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';


const Form = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const handlerForm = (e) => {
        e.preventDefault();
        const newProduct = {
            title,
            price,
            description
        }
        axios.post('http://localhost:8000/api/products', newProduct)
            .then((response) => {
                console.log(response.data);
                // nav("/")
            })
            .catch((err) => {
                console.log("❌❌❌ Something Went Wrong", err);
            })
    }
    return (
        <div className="container mt-5">
            <h2>Product Manager</h2>
            <form  onSubmit={handlerForm}>
                <div className="form-group">
                    Title: <input className="form-control" onChange={e => { setTitle(e.target.value) }} value={title} />
                </div>
                <div className="form-group">
                Price: <input className="form-control" type="number" onChange={e => { setPrice(e.target.value) }} value={price} />
                </div>

                <div className="form-group">
                Description: <input className=" form-control" onChange={(e) => { setDescription(e.target.value) }} value={description} />
                </div>
                <button className="btn btn-primary m-3">Create</button>
            </form>
        </div>
    )
}

export default Form