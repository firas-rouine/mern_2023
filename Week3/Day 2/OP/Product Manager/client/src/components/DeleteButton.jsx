import React from 'react'
import axios from 'axios';

const DeleteButton = (props) => {
    const { id, successCallback } = props;
    // delete function
const deleteProduct = (e) => {
    axios.delete("http://localhost:8000/api/products/" + id)
        .then((res) => {
            successCallback();
            // setProducts(products.filter(product => product._id !== id));

        })
        .catch((err) => {
            console.log("❌❌❌ Something Went Wrong", err)
        })
}
  return (
    <button className="btn btn-secondary m-3" onClick={deleteProduct}>
            Delete
        </button>
  )
}

export default DeleteButton