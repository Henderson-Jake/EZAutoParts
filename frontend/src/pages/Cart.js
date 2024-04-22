import React, { useState, useEffect } from 'react';
import "../styles/Cart.css";

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [checkoutMessage, setCheckoutMessage] = useState('');
    
    useEffect(() => {
        // Retrieve cart items from local storage
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        setCartItems(storedCartItems);
      }, []);

    useEffect(() => {
        // Calculate total price whenever cart items change
        const total = cartItems.reduce((acc, item) => {
          const price = parseFloat(item.price.replace('MSRP $', '').replace(',', ''));
          return acc + price * item.quantity;
        }, 0);
        setTotalPrice(total.toFixed(2));
    }, [cartItems]);

    const removeFromCart = (itemId) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    const updateQuantity = (itemId, quantity) => {
        const updatedCartItems = cartItems.map((item) => {
          if (item.id === itemId) {
            return { ...item, quantity: parseInt(quantity) };
          }
          return item;
        });
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      };

    const handleCheckout = () => {
        console.log('Checkout clicked');
        setCheckoutMessage('Thank you for your purchase! 🎉');
        setCartItems([]);
        localStorage.removeItem('cartItems');
      };

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className="empty-cart-message">Your cart is empty.</p>
            ) : (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.imageUrl} alt={item.name} />
                            <div className="item-details">
                            <span className="cart-item-name">{item.name}</span>
                            <span className="cart-item-price">{item.price}</span>
                        </div>
                        <div className="item-actions">
                            <select
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, e.target.value)}
                            >
                                {[...Array(10)].map((_, index) => (
                                    <option key={index + 1} value={index + 1}>
                                    {index + 1}
                                    </option>
                                ))}
                            </select>
                            <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    </div>
                    ))}
                    <div className="total-price">
                        <strong>Total Price: ${totalPrice}</strong>
                    </div>
                    <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
                </div>
            )}
            {checkoutMessage && <p className="checkout-message">{checkoutMessage}</p>}
        </div>
    );
}

export default Cart;
