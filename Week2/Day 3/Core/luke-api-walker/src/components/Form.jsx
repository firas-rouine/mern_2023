import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Form = (props) => {
    const [type,setType] = useState('people');
    const [id,setId] = useState(1);
    const navigate =useNavigate();
    const submitHandler = (e) =>{
        e.preventDefault();
        // console.log(type);
        // console.log(id);
        navigate("/" + type+ "/"+ id)

    }


    return (
        <form onSubmit={submitHandler}>
            <label > Search for: </label>
            <select onChange={(e) => { setType(e.target.value) }} value={type}>
                <option>people</option>
                <option>planets</option>
            </select>

            <label> ID: </label>  
            <input type='number' onChange={(e)=>{setId(e.target.value)}} value={id}></input>
            <input type="submit" value="Search" />
        </form>
    )
}

export default Form