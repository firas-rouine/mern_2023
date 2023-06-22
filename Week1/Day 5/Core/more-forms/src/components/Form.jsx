import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

const Form = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_password, setConfirm_password] = useState("");

    const [firstnameError, setFirstnameError] = useState(false);
    const [lastnameError, setLastnameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const validateFirstname = (e) => {
        setFirstname(e.target.value)
        if (e.target.value.length < 2 && e.target.value !== "") {
            setFirstnameError(true)
        } else {
            setFirstnameError(false);
        }

    }
    const validateLastname = (e) => {
        setLastname(e.target.value)
        if (e.target.value.length < 2 && e.target.value !== "") {
            setLastnameError(true)
        } else {
            setLastnameError(false);
        }

    }
    const validateEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 5 && e.target.value !== "") {
            setEmailError(true)
        } else {
            setEmailError(false);
        }

    }
    const validatePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8 && e.target.value !== "") {
            setPasswordError(true)
        } else {
            setPasswordError(false);
        }

    }
    const validateConfirmPassword = (e) => {
        setConfirm_password(e.target.value)
        if (e.target.value.length < 8 && e.target.value !== "") {
            setConfirmPasswordError(true)
        } else {
            setConfirmPasswordError(false);
        }

    }
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
                    <input type="text" className="form-control" onChange={(e) => { validateFirstname(e); }} /> <br />
                    {firstnameError ? <p style={{ color: "red" }}>First Name must be at least 2 characters!</p> : ""}
                </div>
                <div className="form-group ">
                    <label>Last name: </label>
                    <input type="text" className="form-control" onChange={(e) => { validateLastname(e); }} /> <br />
                    {lastnameError ? <p style={{ color: "red" }}>Last Name must be at least 2 characters!</p> : ""}
                </div>
                <div className="form-group ">
                    <label>Email : </label>
                    <input type="text" className="form-control" onChange={(e) => { validateEmail(e); }} /> <br />
                    {emailError ? <p style={{ color: "red" }}>Email must be at least 5 characters !</p> : ""}
                </div>
                <div className="form-group ">
                    <label>Password: </label>
                    <input type="text" className="form-control" onChange={(e) => { validatePassword(e); }} /> <br />
                    {passwordError ? <p style={{ color: "red" }}>passwords must at least 8 characters</p> : ""}
                    {confirmPasswordError ? <p style={{ color: "red" }}>passwords must match</p> : ""}
                </div>
                <div className="form-group ">
                    <label>Confirm Password: </label>
                    <input type="text" className="form-control" onChange={(e) => { validateConfirmPassword(e); }} /> <br />

                </div>
                <input type="submit" value="Create User" className="btn btn-primary mt-3" />

            </form>


        </div>
    )
}

export default Form