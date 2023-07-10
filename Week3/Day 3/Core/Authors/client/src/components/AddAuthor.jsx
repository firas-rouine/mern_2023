import React from 'react'
import Form from './Form'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import "./Main.css"

const AddAuthor = (props) => {
  const [Authors, setAuthors] = useState([])
  //Create an array to store errors from the API
  const [errors, setErrors] = useState([]);

  // create  product
  const createProduct = (newProduct) => {
    axios.post('http://localhost:8000/api/authors', newProduct)
      .then((response) => {
        console.log(response.data);
        setAuthors([...Authors, response.data.Author]);
        // nav("/")
      })
      .catch(err=>{
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
            errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors(errorArr);
    })  

  }
  return (
    <div className="margin">
      <Link to={"/"} >Home</Link>
      <p className="color">Add a new author:</p>
      <Form onSubmitProp={createProduct}
        initialName=""
        errors={errors}
      />
    </div>
  )
}

export default AddAuthor