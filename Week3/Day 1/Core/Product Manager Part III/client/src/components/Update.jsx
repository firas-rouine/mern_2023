import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


const Update = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");
    const {id}=useParams()
    const nav = useNavigate();



    useEffect(()=>{
        // go to the server and bring the show from DB
        axios.get("http://localhost:8000/api/products/"+id)
        .then((res)=>{
            console.log(res.data);
            setTitle(res.data.Product.title)
            setPrice(res.data.Product.price)
            setDescription(res.data.Product.description)
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[id])

    const updateProduct =(e)=>{
        e.preventDefault();

        axios.put("http://localhost:8000/api/products/"+id,{title,price,description})
        .then(res => {
            console.log(res)
            nav("/"+id)
        })
        .catch(err => console.error(err));

    }
  return (
    <div className="container mt-5">
        <h2> Update Product Manager</h2>
            <form  onSubmit={updateProduct}>
                <div className="form-group">
                    Title: <input className="form-control" onChange={e => { setTitle(e.target.value) }} value={title} />
                </div>
                <div className="form-group">
                Price: <input className="form-control" type="number" onChange={e => { setPrice(e.target.value) }} value={price} />
                </div>

                <div className="form-group">
                Description: <input className=" form-control" onChange={(e) => { setDescription(e.target.value) }} value={description} />
                </div>
                <button className="btn btn-primary m-3">update</button>
            </form>
    </div>
  )
}

export default Update