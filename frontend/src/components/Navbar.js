import React, { useState } from 'react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Searchbar from './Searchbar';
import axios from 'axios';
import '../styles/Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(true); // This is to track login success
  const [error, setError] = useState(''); // This is to track login error

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsLoginOpen(false); // Close the login dropdown if open
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
    setIsMenuOpen(false); // Close the menu dropdown if open
  };

  const handleSearch = (query) => {
    // Handle search functionality here
    console.log('Search query:', query);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users/login', {
        email: e.target.username.value,
        password: e.target.password.value
      });

      // When authentication is successful
      if (response.status === 200) {
        setIsLoginSuccess(true);
        // Perform login actions right hhere (such as redirect, store user info in state, etc...)
        alert('Authentication successful!');
      }
    } catch (error) {
      // Handles any authentication error
      setIsLoginSuccess(false);
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
      } else {
        setError('Internal server error');
      }
    }
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>
        <div className="menu">
          <button className="menubtn" onClick={toggleMenu}>
            Menu
          </button>
          {isMenuOpen && (
            <div className="menu-content">
              <Link to="/body-parts/alternators">Alternators</Link>
              <Link to="/body-parts/batteries">Battery</Link>
              <Link to="/body-parts/filters">Filters</Link>
              <Link to="/body-parts/Headlight-bulbs">Headlights</Link>
              <Link to="/body-parts/spark-plugs">Spark Plugs</Link>
            </div>
          )}
        </div>
      </div>

      <div className="centerSide">
        <div className="navLinks">
          <Link to="/About">About</Link>
          <Link to="/FAQ">FAQ</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>

      <div className="rightSide">
        <Searchbar onSearch={handleSearch} /> {/* Include the SearchBar component */}
        <Link to="/Cart" className="iconButton">
          <AddShoppingCartIcon style={{ color: 'white', fontSize: 35 }} />
        </Link>
        <div className="loginlink" style={{ position: 'relative' }}>
          <button className="login-button" onClick={toggleLogin}>
            Login
          </button>
          <div
            className="login-dropdown"
            style={{
              display: isLoginOpen ? 'block' : 'none',
              position: 'absolute',
              top: '100%',
              right: 0,
            }}
          >
            <div
              className="login-dropdown"
              style={{
                display: isLoginOpen ? 'block' : 'none',
                position: 'absolute',
                fontFamily: 'Arial',
                top: '100%',
                right: 0,
                backgroundColor: '#f4f4f4',
                padding: '20px',
                borderRadius: '4px',
                boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.5)',
              }}
            >
              {/* Login form */}
              <form onSubmit={handleSubmit}>
                <label htmlFor="username">Email:</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                <button className="submit-login" type="submit">
                  Login
                </button>
              </form>
              {!isLoginSuccess && <div className="invalid-credentials">{error}</div>}
              <div className="register-link">
                Don't have an account? <Link to="/register">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
