import React, { useEffect, useState } from 'react';
import { bodyPartsData, wheelPartsData } from '../components/partsData'
import { useNavigate } from 'react-router-dom';
import car from '../assets/mustang-transformed.png';
import carlogos from '../assets/carlogos.png';
import carinterior from '../assets/carinterior.png';
import bodyparts from '../assets/bodyparts.png';
import wheels from '../assets/wheels.png';
import VehicleSelectionTool from '../components/VehicleSelectionTool';
import '../styles/Home.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function Home() {
  const [popularItems, setPopularItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedItems = [
      ...bodyPartsData.slice(14, 15),
      ...bodyPartsData.slice(5, 6),
      ...wheelPartsData.slice(0, 1),
    ];

    const loadImages = async () => {
      const partsWithImages = await Promise.all(selectedItems.map(async (part) => {
        const imageModule = await import(`../assets/${part.name.replace(/[^a-zA-Z0-9]/g, '')}.png`);
        return { ...part, imageUrl: imageModule.default };
      }));
      setPopularItems(partsWithImages);
    };
    loadImages();
  }, []);

  const redirectToInteriorParts = () => {
    navigate('/interior-parts');
  };
  const redirectToBodyParts = () => {
    navigate('/body-parts');
  };
  const redirectToWheelParts = () => {
    navigate('/wheel-parts');
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
        <button className='bodyparts-button'onClick={redirectToBodyParts}>Shop Now</button>
      </div>
      <div className='wheels'>
        <img src={wheels} alt='wheels'/>
        <button className='wheels-button'onClick={redirectToWheelParts}>Shop Now</button>
      </div>
      <div className="popular-items-bar">
        <div className="bar"></div>
        <div className="popular-items-text">Popular Items</div>
        <div className="popular-items-list">
          {popularItems.map(item => (
            <div key={item.id} className="popular-item">
              <img src={item.imageUrl} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <div className="map-bar">
        <div className="bar"></div>
        <div className="popular-items-text">Need a Mechanic ?</div>
     
        <div id="map" style={{ height: '350px', width: '50%' }}>
          <iframe src="https://my.atlist.com/map/ca2f73e3-3605-4b55-b10b-fcb838c59833/?share=true" allow="geolocation 'self' https://my.atlist.com" width="100%" height="300px" loading="lazy" frameborder="0" scrolling="no" allowfullscreen id="atlist-embed"></iframe>
        </div>
      </div>
      <footer className="ContactFooter">
        <div className="ContactInfo">
          <h2>Contact Information</h2>
          <p>EZAUTOPARTS</p>
          <p>================</p>
          <p>650 Engineering Drive</p>
          <p>Peachtree Corners, GA 30092</p>
          <p>================</p>
          <p>800-829-3900</p>
          <p>Email: <a href="mailto:miloviveros@yahoo.com">miloviveros@yahoo.com</a></p>
        </div>
        <div className="SocialMedia">
          <h2>Connect with Us</h2>
          <a href="https://www.facebook.com"><FacebookIcon /></a>
          <a href="https://www.twitter.com"><TwitterIcon /></a>
          <a href="https://www.instagram.com"><InstagramIcon /></a>
        </div>
        <div className="BusinessHours">
          <h2>Business Hours</h2>
          <p>Monday - Friday: 9am - 5pm</p>
          <p>Saturday: 10am - 4pm</p>
          <p>Sunday: Closed</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
