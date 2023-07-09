import React from 'react'
import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';


const Form = (props) => {
    const { initialTitle, initialPrice, initialDescription, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const handlerForm = (e) => {
        e.preventDefault();
        onSubmitProp({ title, price, description });
        setTitle('');
        setPrice(0);
        setDescription('');
    }
    return (
        <div className="container mt-5">
            {/* <h2>Product Manager</h2> */}
            <form onSubmit={handlerForm}>
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