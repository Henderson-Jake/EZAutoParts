import React, { useEffect, useState } from "react";
import { wheelPartsData } from "../components/partsData";
import "../styles/WheelParts.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Footer from "./Footer";

function WheelParts() {
  const [parts, setParts] = useState(wheelPartsData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [sortType, setSortType] = useState("default");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      const partsWithImages = await Promise.all(
        parts.map(async (part) => {
          const imageModule = await import(
            `../assets/${part.name.replace(/[^a-zA-Z0-9]/g, "")}.png`
          );
          return { ...part, imageUrl: imageModule.default };
        })
      );
      setParts(partsWithImages);
    };
    loadImages();
  }, []);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(parts.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const sortedAndFilteredParts = parts
    .filter((part) => {
      const price = parseFloat(part.price.replace(/[^\d.]/g, ""));
      switch (selectedPriceRange) {
        case "$0 - $100":
          return price <= 100;
        case "$100 - $500":
          return price > 100 && price <= 500;
        case "$500 - $1000":
          return price > 500 && price <= 1000;
        case "$1000 - $1500":
          return price > 1000 && price <= 1500;
        case "$1500 - $2000":
          return price > 1500 && price <= 2000;
        default:
          return true;
      }
    })
    .filter(
      (part) => selectedCategory === "All" || part.category === selectedCategory
    )
    .sort((a, b) => {
      const priceA = parseFloat(a.price.replace(/[^\d.]/g, ""));
      const priceB = parseFloat(b.price.replace(/[^\d.]/g, ""));
      switch (sortType) {
        case "priceAsc":
          return priceA - priceB;
        case "priceDesc":
          return priceB - priceA;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const currentItems = sortedAndFilteredParts.slice(startIndex, endIndex);

  const addToCart = (item) => {
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItem = existingCartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      const updatedCartItems = existingCartItems.map((cartItem) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
    } else {
      const newItem = { ...item, quantity: 1 };
      const updatedCartItems = [...existingCartItems, newItem];
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      setCartItems(updatedCartItems);
    }
  };

  return (
    <div className="wheelparts-main">
      <div className="wheel-parts">
        <h1 className="wheel-parts-title">Wheel Parts</h1>
        <div className="filters-container">
          <div className="category-filter">
            <select onChange={(e) => setSelectedCategory(e.target.value)}>
              <option value="All">All Categories</option>
              <option value="Brake Pads">Brake Pads</option>
              <option value="Brake Rotors">Brake Rotors</option>
              <option value="Sensors">Sensors</option>
            </select>
          </div>
          <div className="price-filter">
            <select onChange={(e) => setSelectedPriceRange(e.target.value)}>
              <option value="All">All Prices</option>
              <option value="$0 - $100">$0 - $100</option>
              <option value="$100 - $500">$100 - $500</option>
              <option value="$500 - $1000">$500 - $1000</option>
              <option value="$1000 - $1500">$1000 - $1500</option>
              <option value="$1500 - $2000">$1500 - $2000</option>
            </select>
          </div>
          <div className="sort-filter">
            <select onChange={(e) => setSortType(e.target.value)}>
              <option value="default">Sort By</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
        <div className="parts-grid">
          {currentItems.map((part) => (
            <div key={part.id} className="part-item">
              <img src={part.imageUrl} alt={part.name} />
              <h3>{part.name}</h3>
              <p>{part.price}</p>
              <button onClick={() => addToCart(part)}>Add to Cart</button>
            </div>
          ))}
        </div>
        <div className="pagination">
          {[...Array(totalPages).keys()].map((pageNumber) => (
            <button
              key={pageNumber + 1}
              onClick={() => setCurrentPage(pageNumber + 1)}
              className={currentPage === pageNumber + 1 ? "active" : ""}
            >
              {pageNumber + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default WheelParts;
