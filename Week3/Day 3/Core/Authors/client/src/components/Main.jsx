import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom";
import "./Main.css"

const Main = (props) => {

    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((res) => {
                console.log(res.data);
                setAuthors(res.data)

            })
            .catch((err) => {
                console.log("❌❌❌ Something Went Wrong", err);
            })
    }, [])
    // delete function
    const deleteAuthor = (id) => {
        axios.delete("http://localhost:8000/api/authors/" + id)
            .then((res) => {
                setAuthors(authors.filter(author => author._id !== id));

            })
            .catch((err) => {
                console.log("❌❌❌ Something Went Wrong", err)
            })
        
    }
    // Sort authors alphabetically
   authors.sort((a, b) => a.name.localeCompare(b.name));
 
    return (
        <div className="margin">
            <Link to={"/new"} >Add an author</Link>
            <p className="color">We have quotes by:</p>
            {/* {JSON.stringify(authors)} */}

            <table className="my-table">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Action Available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map((author) => {
                        return (
                            <tr key={author._id}>
                                <td>{author.name}</td>
                                <td>
                                    <button className="edit-button"><Link to={`/edit/${author._id}`}>Edit</Link></button>
                                    <button className="delete-button" onClick={() => deleteAuthor(author._id)}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Main