import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import '../styles/Register.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();

      // Check if passwords match
      if (password !== confirmPassword) {
          setError('Passwords do not match');
          return;
      }

      try {
          const response = await fetch('http://localhost:3001/users/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ firstName, lastName, email, password }),
          });

          if (!response.ok) {
              const data = await response.json();
              throw new Error(data.error);
          } else {
              setSuccessMessage('Registration successful');
          }
      } catch (error) {
          setError(error.message || 'An error occurred');
      }
  };

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
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstname">First Name:</label>
                    <input type="text" id="firstname" name="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    <label htmlFor="lastname">Last Name:</label>
                    <input type="text" id="lastname" name="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="password2">Confirm Password:</label>
                    <input type="password" id="password2" name="password2" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    {error && <p className="error-message">{error}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
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
