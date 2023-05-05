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
        const savedcart = [];
        //step 1:get id from shopping cart
        for (const id in storedCart) {
            //step 2:get the product by id
            const addedProduct = products.find(product => product.id == id)
            if (addedProduct) {
                //get quantity of the product
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //add the product to saved product
                savedcart.push(addedProduct);
            }

        }
        setcart(savedcart)
    }, [products])

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