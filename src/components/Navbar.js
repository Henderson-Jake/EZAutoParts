import React from 'react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Searchbar from './Searchbar';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
      <Link to="/">
        <img src={Logo} alt="Logo" />
        </Link>
      </div>

      <div className="centerSide">
        <div className="navLinks">
          <Link to="/About">About</Link>
          <Link to="/FAQ">FAQ</Link>
          <Link to="/Contact">Contact</Link>
          </div>

      <div className="rightSide">
      <Searchbar /> {/* Include the SearchBar component */}
      <button className="iconButton">
        <AddShoppingCartIcon style={{ color:'white', fontSize: 35 }} />
        </button>
        </div>
        <Link to="/login" className="loginLink">Login</Link>
      </div>
        
      
    </div>
  );
}

export default Navbar;
