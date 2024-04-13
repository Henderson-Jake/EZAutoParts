import React, { useState } from 'react';
import "../styles/Cart.css";

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    const removeItem = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price.replace(/[^\d.]/g, '')), 0);

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <img src={item.imageUrl} alt={item.name} />
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                                <button onClick={() => removeItem(item.id)}>Remove</button>
                            </div>
                        </div>
                    ))}
                    <div className="total-price">
                        <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;
