import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirm_password: '',
  errors: {
    firstnameError: false,
    lastnameError: false,
    emailError: false,
    passwordError: false,
    confirmPasswordError: false,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'SET_ERROR':
      return { ...state, errors: { ...state.errors, [action.errorField]: action.hasError } };
    default:
      return state;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (field, value) => {
    dispatch({ type: 'SET_FIELD', field, value });
    validateField(field, value);
  };

  const validateField = (field, value) => {
    let hasError = false;
    if (field === 'firstname' || field === 'lastname') {
      hasError = value.length < 2 && value !== '';
    } else if (field === 'email') {
        hasError = !isValidEmail(value);
    } else if (field === 'password') {
      hasError = value.length < 8 && value !== '';
    } else if (field === 'confirm_password') {
      hasError = value !== state.password;
    }
  
    dispatch({ type: 'SET_ERROR', errorField: `${field}Error`, hasError });
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  

  const createUser = (e) => {
    e.preventDefault();
    const { firstname, lastname, email, password, confirm_password } = state;
    const newUser = { firstname, lastname, email, password, confirm_password };
    console.log(newUser);
  };

  const { firstname, lastname, email, password, confirm_password, errors } = state;

  return (
    <div className="container d-flex justify-content-center">
      <form onSubmit={createUser}>
        <div className="form-group">
          <label>First name:</label>
          <input
            type="text"
            className="form-control"
            value={firstname}
            onChange={(e) => handleChange('firstname', e.target.value)}
          />
          {errors.firstnameError && (
            <p style={{ color: 'red' }}>First Name must be at least 2 characters!</p>
          )}
        </div>
        <div className="form-group">
          <label>Last name:</label>
          <input
            type="text"
            className="form-control"
            value={lastname}
            onChange={(e) => handleChange('lastname', e.target.value)}
          />
          {errors.lastnameError && (
            <p style={{ color: 'red' }}>Last Name must be at least 2 characters!</p>
          )}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="text"
            className="form-control"
            value={email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
          {errors.emailError && <p style={{ color: 'red' }}>Invalid email address!</p>}
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => handleChange('password', e.target.value)}
          />
          {errors.passwordError && (
            <p style={{ color: 'red' }}>Passwords must be at least 8 characters!</p>
          )}
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            value={confirm_password}
            onChange={(e) => handleChange('confirm_password', e.target.value)}
          />
          {errors.confirm_passwordError && (
            <p style={{ color: 'red' }}>Passwords must match!</p>
          )}
        </div>
        <input type="submit" value="Create User" className="btn btn-primary mt-3" />
      </form>
    </div>
  );
};

export default Form;
