import React, { useState, useEffect } from 'react';
import { partsData, bodyPartsData, wheelPartsData } from './partsData'; // Assuming partsData.js is in the same directory
import "../styles/Searchbar.css"; // Assuming CSS file is in

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [partsWithImages, setPartsWithImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      const resultsWithImages = await Promise.all(searchResults.map(async (result) => {
        const imageModule = await import(`../assets/${result.name.replace(/[^a-zA-Z0-9]/g, '')}.png`);
        return { ...result, imageUrl: imageModule.default };
      }));
      setPartsWithImages(resultsWithImages);
      setLoading(false);
    };
    if (searchResults.length > 0) {
      loadImages();
    }
  }, [searchResults]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchTerm);
    const results = [...partsData, ...bodyPartsData, ...wheelPartsData].filter(
      (item) =>
        searchTerm.trim() === '' ||  // Show all items when search term is empty
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleClosePopup = () => {
    setSelectedItem(null);
  };

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
  const handleCloseResults = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  return (
    <div className="searchBar">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          list="parts"
        />
        <datalist id="parts">
          {[...partsData, ...bodyPartsData, ...wheelPartsData].map((item) => (
            <option key={item.id} value={item.name} />
          ))}
        </datalist>
        <button type="submit">Search</button>
      </form>
      {searchResults.length > 0 && (
        <div className="searchResults" style={{ position: 'absolute', top: '100px', left: '50%', transform: 'translateX(-50%)', zIndex: '9999', maxHeight: '300px', overflowY: 'auto' }}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            partsWithImages.map((item, index) => (
              <div key={item.id} onClick={() => handleSelectItem(item)}>
                <img className="small-image" src={item.imageUrl} alt={item.name} />
                <h3>{item.name}</h3>
                <p>ID: {item.id}</p>
                <p>Price: {item.price}</p>
                <p>Category: {item.category}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button> 
                {index === partsWithImages.length - 1 && <button className="close-button" onClick={handleCloseResults}>Close</button>}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;