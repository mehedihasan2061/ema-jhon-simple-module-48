import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    // console.log(cart);
    

    useEffect(() => {
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])


    useEffect(() => {
        const storedCart = getStoredCart();
        let savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
           }
        }
        setCart(savedCart)
      
    },[products])
    
    const handleBtn = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
           selectedProduct.quantity=1 
           newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart=[...rest,exists]
        }
      
        setCart(newCart)
        addToDb(selectedProduct.id)
    };

    return (
        <div className='shop-component'>
            {/* product summary  */}

            <div className='product-component'>
                {
                    products.map(product => <Product product={product} key={product.id} handleBtn={handleBtn}></Product>)
                }
            </div>


            {/* cart summary */}
            <div className='cart-component'>
               <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;