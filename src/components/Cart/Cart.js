import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    console.log(cart);
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping=shipping + product.shipping
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    // console.log(typeof tax)
    const grandTotal = total + shipping + tax;

    
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <p>Selected Item: {quantity}</p>
            <p>Total Price: ${total } </p>
            <p>Total Shipping Charge: { shipping}</p>
            <p>Tax: { tax}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)} </h4>
        </div>
    );
};

export default Cart;