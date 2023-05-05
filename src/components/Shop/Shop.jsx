import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../utilities/fakedb';
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setcart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddtoCart = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setcart(newCart);
        addToDb(product.id)
    }
    useEffect(() => {
        const storedCart = getShoppingCart();
        console.log(storedCart)
    }, [])

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddtoCart={handleAddtoCart}>
                    </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;