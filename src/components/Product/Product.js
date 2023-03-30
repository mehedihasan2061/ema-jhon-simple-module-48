import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product,handleBtn}) => {
    // console.log(product);
    const { name, category, price, img, ratings, seller } = product;
    
    
    return (
      <div className="product-info">
        <img src={img} alt="" />
        <div className="product-text">
          <p>{name}</p>
          <p>
            <small>Price: ${price}</small>
          </p>
          <p>
            <small>Manufecturer: {seller}</small>
          </p>
          <p>
            <small>Rating: {ratings} star</small>
          </p>
        </div>

        <div className='btn-style'>
          <button onClick={() => handleBtn(product)} className="btn">
            <p>Add to Cart</p>
            <p>
              <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </p>
          </button>
        </div>
      </div>
    );
};

export default Product;