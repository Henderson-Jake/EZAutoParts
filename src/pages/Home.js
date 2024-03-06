import React from 'react';
import { useNavigate } from 'react-router-dom';
import car from '../assets/car.png';
import carlogos from '../assets/carlogos.png';
import carinterior from '../assets/carinterior.png';
import bodyparts from '../assets/bodyparts.png';
import wheels from '../assets/wheels.png';
import VehicleSelectionTool from '../components/VehicleSelectionTool';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

  const redirectToInteriorParts = () => {
    navigate('/interior-parts');
  };

  return (
    <div className="home">
      <div className="homeimage" style={{ position: 'relative' }}>
        <VehicleSelectionTool />
        <img src={car} alt="car" />
      </div>
      <div className="carlogos">
        <img src={carlogos} alt="carlogos" />
      </div>
      <div className='carinterior'>
        <img src={carinterior} alt="carinterior" />
        <button className="interior-button" onClick={redirectToInteriorParts}>Shop Now</button>
      </div>
      <div className='bodyparts'>
        <img src={bodyparts} alt='carparts'/>
        <button className='bodyparts-button'>Shop Now</button>
      </div>
      <div className='wheels'>
        <img src={wheels} alt='wheels'/>
        <button className='wheels-button'>Shop Now</button>
      </div>
    </div>
  );
}

export default Home;
