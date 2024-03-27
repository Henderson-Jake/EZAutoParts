import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import '../styles/Register.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function Register() {
    return (
      <div className="register-container">
        <div className="register">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="black-strip"></div>
        <div className="back-button">
          <Link to="/">
            <ArrowBackIcon /> Back
          </Link>
        </div>
        <div className="account-box">
          <h2>Create an Account</h2>
          <form>
            <label htmlFor="firstname">First Name:</label>
            <input type="text" id="firstname" name="firstname" />
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" id="lastname" name="lastname" />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
            <label htmlFor="password2">Confirm Password:</label>
            <input type="password" id="password2" name="<PASSWORD>" />
            <button type="submit">Create Account</button>
          </form>
          <div className="login-link">
            Already have an account? <Link to="/">Login</Link>
        </div>
      </div>
    </div>
    );
  }
  
  export default Register;