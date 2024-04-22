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
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import InstagramIcon from "@mui/icons-material/Instagram";


function Home() {
  const [popularItems, setPopularItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
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

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    } else {
      const newItem = { ...item, quantity: 1 };
      const updatedCartItems = [...cartItems, newItem];
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    }
  };

  return (
    <div className="home">
      <div className="homeimage" style={{ position: "relative" }}>
        {/* <img src={car} alt="car" /> */}
        <div
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${car})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "43rem",
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
              <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <div className="map-bar">
  <div className="bar"></div>
  <p>Need a Mechanic ?</p>
  <LoadScript googleMapsApiKey="AIzaSyDIhPEYXCDVjQxVUjOVZ94ZsOiWZknow30">
    <GoogleMap
      mapContainerStyle={{
        height: "400px",
        width: "100%"
      }}
      center={{ lat: -25.344, lng: 131.031 }}
      zoom={4}
    >
      <GoogleMap
  mapContainerStyle={{
    height: "400px",
    width: "100%"
  }}
  center={{ lat: 29.5849, lng: -98.6215 }} // UTSA coordinates
  zoom={12}
>
  <Marker position={{ lat: 29.5849, lng: -98.6215 }} />
</GoogleMap>
    </GoogleMap>
  </LoadScript>
  </div>

      <Footer/>
    </div>
  );
}

export default Home;

