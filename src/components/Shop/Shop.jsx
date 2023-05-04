import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
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
    }

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
                <h4>cart display here:{cart.length}</h4>

            </div>
        </div>
    );
};

export default Shop;