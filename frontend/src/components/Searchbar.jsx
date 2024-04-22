import React, { useState, useEffect } from 'react';
import { partsData, bodyPartsData, wheelPartsData } from './partsData'; // Assuming partsData.js is in the same directory
import "../styles/Searchbar.css"; // Assuming CSS file is in

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [partsWithImages, setPartsWithImages] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const handleChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Searching for:', searchTerm);
    const results = [...partsData, ...bodyPartsData, ...wheelPartsData].filter(
      (item) =>
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

  const handleAddToCart = (item) => {
    // Implement the logic to add the item to the cart
    console.log('Adding item to cart:', item);
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
        <div className="searchResults">
          {loading ? (
            <p>Loading...</p>
          ) : (
            partsWithImages.map((item) => (
              <div key={item.id} onClick={() => handleSelectItem(item)}>
                <img className="small-image" src={item.imageUrl} alt={item.name} />
                <h3>{item.name}</h3>
                <p>ID: {item.id}</p>
                <p>Price: {item.price}</p>
                <p>Category: {item.category}</p>
                <button onClick={() => handleAddToCart(item)}>Add to Cart</button> 
                 <button className="close-button" onClick={handleCloseResults}>Close</button>
               
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
