import React, { useState, useEffect } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:3001/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
                console.log('Received data from backend:', data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="product-list">
            <div className="product-container">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image_url} alt={product.name} />
                        <div className="product-details">
                            <h2>{product.name}</h2>
                            <p>${product.price}</p>
                            <p>{product.description}</p>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
