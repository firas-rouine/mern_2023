import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import { useParams,useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './Form';


const Update = (props) => {
    // const { id } = props;
    const [product, setProduct] = useState([])
    const {id}=useParams()
    const nav = useNavigate();



    useEffect(()=>{
        // go to the server and bring the show from DB
        axios.get("http://localhost:8000/api/products/"+id)
        .then((res)=>{
            console.log(res.data);
            setProduct(res.data)
            // setTitle(res.data.Product.title)
            // setPrice(res.data.Product.price)
            // setDescription(res.data.Product.description)
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[id])

    const updateProduct =(product)=>{
        axios.put("http://localhost:8000/api/products/"+id,product)
        .then(res => {
            console.log(res)
            nav("/"+id)
        })
        .catch(err => console.error(err));

    }
  return (
    <div className="container mt-5">
        <h2> Update Product Manager</h2>
        <Form
        onSubmitProp={updateProduct}
        initialTitle={product.title}
        initialPrice={product.title}
        initialDescription={product.description}
        
    />
            
    </div>
  )
}

export default Update