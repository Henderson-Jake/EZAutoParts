import React, { useEffect, useState } from "react";
import { bodyPartsData, wheelPartsData } from "../components/partsData";
import { useNavigate } from "react-router-dom";
import car from "../assets/mustang-transformed.png";
import carlogos from "../assets/carlogos.png";
import carinterior from "../assets/carinterior.png";
import bodyparts from "../assets/bodyparts.png";
import wheels from "../assets/wheels.png";
import VehicleSelectionTool from "../components/VehicleSelectionTool";
import "../styles/Home.css";
import Footer from "./Footer";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";


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
      const partsWithImages = await Promise.all(
        selectedItems.map(async (part) => {
          const imageModule = await import(
            `../assets/${part.name.replace(/[^a-zA-Z0-9]/g, "")}.png`
          );
          return { ...part, imageUrl: imageModule.default };
        })
      );
      setPopularItems(partsWithImages);
    };
    loadImages();
  }, []);

  const redirectToInteriorParts = () => {
    navigate("/interior-parts");
  };
  const redirectToBodyParts = () => {
    navigate("/body-parts");
  };
  const redirectToWheelParts = () => {
    navigate("/wheel-parts");
  };

  return (
    <div className="home">
      <div className="homeimage" style={{ position: "relative" }}>
        {/* <img src={car} alt="car" /> */}
        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${car})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "30rem",
            overflow: "hidden",
          }}
        ></div>
      </div>
      <VehicleSelectionTool />
      <div className="carlogos">
        <img src={carlogos} alt="carlogos" />
      </div>
      <div className="home-cars">
        <div className="carinterior car-product">
          <div className="car_image" 
          style={{
            backgroundImage: `url(${carinterior})`,
          }}
          >
            {/* <img src={carinterior} alt="carinterior" /> */}
          </div>
          <button className="interior-button" onClick={redirectToInteriorParts}>
            Shop Now
          </button>
        </div>
        <div className="bodyparts car-product">
          <div
            className="car_image"
            style={{
              backgroundImage: `url(${bodyparts})`,
            }}
          >
            {/* <img src={bodyparts} alt="carparts" /> */}
          </div>
          <button className="bodyparts-button" onClick={redirectToBodyParts}>
            Shop Now
          </button>
        </div>
        <div className="wheels car-product">
          <div
            className="car_image"
            style={{
              backgroundImage: `url(${wheels})`,
            }}
          >
            {/* <img src={wheels} alt="wheels" /> */}
          </div>
          <button className="wheels-button" onClick={redirectToWheelParts}>
            Shop Now
          </button>
        </div>
      </div>
      <div className="popular-items-bar">
        <div className="bar"></div>
        <h1>Popular Items</h1>
        <div className="popular-items-list">
          {popularItems.map((item) => (
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
        <p>Need a Mechanic ?</p>
     
        <div id="map" style={{ height: '350px', width: '50%' }}>
          <iframe src="https://my.atlist.com/map/ca2f73e3-3605-4b55-b10b-fcb838c59833/?share=true" allow="geolocation 'self' https://my.atlist.com" width="100%" height="300px" loading="lazy" frameborder="0" scrolling="no" allowfullscreen id="atlist-embed"></iframe>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
