import React,{useState} from 'react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Searchbar from './Searchbar';
import '../styles/Navbar.css';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="navbar">
      <div className="leftSide">
      <div className="dropdown">
            <button className="dropbtn" onClick={toggleDropdown}>
              Menu
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/Service1">Filters</Link>
                <Link to="/Service2">Headlights</Link>
                <Link to="/Service3">Battery</Link>
              </div>
            )}
          </div>
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
