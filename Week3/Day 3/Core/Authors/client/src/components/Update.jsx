import React from 'react'
import { useState, useEffect } from "react"
import axios from "axios"
import { useParams, useNavigate,Link } from "react-router-dom"
import Form from './Form'
const styles = {
    color: {
        color: 'purple'
    },
    margin: {
        marginLeft: '3rem'
    }
};
const Update = (props) => {
    const [authors, setAuthors] = useState([])
    const [errors, setErrors] = useState([]);
    // console.log(authors);
    // const [title, setTitle] = useState("");
    const { id } = useParams()
    const nav = useNavigate();
    useEffect(() => {
        // go to the server and bring the show from DB
        axios.get("http://localhost:8000/api/authors/" + id)
            .then((res) => {
                // console.log(res.data.Author);
                setAuthors(res.data.Author)
                
                // setTitle(res.data.Product.title)

            })
            .catch((err) => {
                console.log("❌❌❌ Something Went Wrong", err);
            })
    }, [id])

    const updateProduct = (author) => {
        axios.put("http://localhost:8000/api/authors/" + id, author)
            .then(res => {
                // console.log(res)
                nav("/")
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

    if (!authors) {
        return (
          <div style={styles.margin}>
            <Link to="/">Home</Link>
            <p style={styles.color}>
              We're sorry, but we could not find the author you are looking for.
              Would you like to add this author to our database?
              <Link to="/new">Create an author</Link>
            </p>
          </div>
        );
      }


    return (
        
        <div style={styles.margin}>
            <Link to={"/"} >Home</Link>
            <p style={styles.color}>Edit this Author:</p>
            {authors.name ? <Form
                onSubmitProp={updateProduct}
                initialName={authors.name}
                errors={errors}
            />: null }
        </div>
    )
}

export default Update