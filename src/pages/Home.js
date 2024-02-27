import React from 'react'
import car from '../assets/car.png'
import carlogos from '../assets/carlogos.png'
import carinterior from '../assets/carinterior.png'

import '../styles/Home.css';

    function Home() {
      return (
        <div className="home">
      <div className="homeimage">
        <img src={car} alt="car" />
      </div>
      <div className="carlogos">
        <img src={carlogos} alt="carlogos" />
        </div>
        <div className='carinterior'>
          <img src={carinterior} alt="carinterior" />
          <button class="interior-button">Shop Now</button>
          </div>
      </div>
      );
      }


export default Home