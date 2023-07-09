import React from 'react'
import axios from "axios"
import DeleteButton from './DeleteButton'
import {useState, useEffect} from "react"
import { useParams ,Link,useNavigate  } from 'react-router-dom'
const ShowOne = (props) => {
    const [oneProduct, setOneProduct] = useState({})
    const {id} = useParams();
    const nav = useNavigate();
    // const history = useHistory()
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
        .then((serverResponse)=>{
            // console.log(serverResponse);
            setOneProduct(serverResponse.data.Product)

        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[id])

    
    // delete function
  //   const deleteProduct = (id) => {
  //     axios.delete("http://localhost:8000/api/products/" + id)
  //         .then((res) => {
  //           nav("/")
  //         })
  //         .catch((err) => {
  //             console.log("❌❌❌ Something Went Wrong", err)
  //         })
  // }
  return (
    <div>
            <h3>{oneProduct.title}</h3>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <Link to={`/${oneProduct._id}/edit`}>edit</Link>
            {/* <button className="btn btn-secondary m-3" onClick={() => deleteProduct(oneProduct._id)}>delete</button> */}
            <DeleteButton id={oneProduct._id} successCallback= {()=> nav("/")} />

    </div>
  )
}

export default ShowOne