import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirm_password] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirm_password };
        console.log(newUser);
    };
    return (
        <div className="container d-flex justify-content-center  ">
            <form onSubmit={createUser}>
                <div className="form-group ">
                    <label>First name: </label>
                    <input type="text" className="form-control" onChange={(e)=>setFirstname(e.target.value)} />
                </div>
                <div className="form-group ">
                    <label>Last name: </label>
                    <input type="text" className="form-control" onChange={(e) => setLastname(e.target.value)} />
                </div>
                <div className="form-group ">
                    <label>Email : </label>
                    <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group ">
                    <label>Password: </label>
                    <input type="text" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group ">
                    <label>Confirm Password: </label>
                    <input type="text" className="form-control" onChange={(e) => setConfirm_password(e.target.value)} />
                </div>
                <input type="submit" value="Create User" className="btn btn-primary mt-3" />
                <div className=" mt-3">
                <h4>Your Form Data</h4>
                <p>First Name: {firstname}</p>
                <p>Last Name: {lastname} </p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
                <p>Confirm Password: {confirm_password}</p>
            </div>
            </form>
 

        </div>
    )
}

export default Form